const express = require("express");
const cors = require("cors");
const { connectToDB, getDb } = require("./db");
const { ObjectId } = require("mongodb");
const authController = require("./controllers/authController");
const bcrypt = require("bcryptjs");

const PORT = 3000;

const app = express();
app.use(express.json());

app.use(cors());

let db;
connectToDB((err) => {
    if (!err) {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Listening on port ${PORT}`);
        });
        db = getDb();
    } else {
        console.log(`DB connection error: ${err}`);
    }
});

//endpoint каталога товаров с пагинацией
app.get("/", (req, res) => {
    const items = [];

    // значение query параметра page
    const page = +req.query.page;

    // значение query параметра limit
    const limit = +req.query.limit;

    // значение query параметра category
    const category = req.query.category;

    // значение query параметра sort
    const sort = req.query.sort;

    // значение query параметра search
    const search = req.query.search;

    // то, с какого элемента начинаем поиск, для пагинации
    const startIndex = (page - 1) * limit;

    // ругулярка, подобная методу substring
    const searchRegex = new RegExp(search, "i");

    // "category._type": "Одежда",

    db.collection("items")
        .find()
        .sort({ order: 1 })
        // .sort({ price: -1 })
        .filter({
            title: { $regex: searchRegex },
        })
        .skip(startIndex)
        .limit(limit)
        .forEach((item) => items.push(item))
        .then(() => {
            res.status(200).json(items);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
            res.status(500).json({ error: "Something went wrong..." });
        });
});

// endpoint выбранного товара
app.get("/article/:id", (req, res) => {
    const itemId = req.params.id;
    if (ObjectId.isValid(itemId)) {
        db.collection("items")
            .findOne({
                _id: new ObjectId(itemId),
            })
            .then((doc) => {
                res.status(200).json(doc);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                res.status(500).json({ error: "Something went wrong..." });
            });
    } else {
        res.status(500).json({ error: "wrong id" });
    }
});

//endpoint для добавления комментариев
app.patch("/article/:id", async (req, res) => {
    const itemId = req.params.id;

    if (ObjectId.isValid(itemId)) {
        // так делаем, потому что в findOneAndUpdate надо передавть обьект (ключ-значение)
        const updateItemId = {
            _id: new ObjectId(itemId),
        };

        const document = await db.collection("items").findOne(updateItemId);

        if (!document) {
            return res.status(404).json({ error: "Document not found" });
        }

        function findIndexById(arr, id) {
            for (let i = 0; i < arr?.length; i++) {
                if (arr[i]._id.toString() === id) {
                    // Предполагается, что объекты в массиве имеют свойство 'id'
                    return i; // Если найден объект с нужным id, возвращаем его порядковый номер
                }
            }
        }

        const index = findIndexById(document.comments, req.body.parentId);

        // узнаем (id), новый это комменатрий, который никому не отвечает, либо комментарий, который кому-то отвечает

        // Определяем путь к массиву комментариев
        const commentsPath = req.body.parentId
            ? `comments.${index}.responses`
            : "comments";

        const updateOperation = {
            $push: {
                [commentsPath]: {
                    ...req.body,
                    _id: new ObjectId(),
                },
            },
        };

        console.log(updateOperation);

        db.collection("items")
            .updateOne(updateItemId, updateOperation)
            .then((doc) => res.status(200).json(doc));
    } else {
        res.status(500).json({ error: "wrong id" });
    }
});

// endpoint для получения существующих категорий товаров
app.get("/category", (req, res) => {
    db.collection("items")
        .distinct("category._type")
        .then((items) => {
            res.status(200).json(items);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
            res.status(500).json({ error: "Something went wrong..." });
        });
});

// endpoint для регистрации
app.post("/registration", async (req, res) => {
    try {
        const {
            name,
            surname,
            username,
            email,
            password,
            city,
            birthday,
            role,
        } = req.body;
        const candidate = await db.collection("users").findOne({ username });
        if (candidate) {
            return res.status(400).json({
                message: "Пользователь с таким именем уже существует",
            });
        }
        const hashPassword = bcrypt.hashSync(password, 7);

        const users = db.collection("users");
        await users.insertOne({
            name,
            surname,
            username,
            email,
            password: hashPassword,
            city,
            birthday,
            role,
        });
        res.json("server work");
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Registration error" });
    }
});

//endpoint для авторизации
// app.post("/login", authController.login);
