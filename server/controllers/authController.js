const bcrypt = require("bcryptjs");

class authController {
    // async registration(req, res) {
    //     try {
    //         const {
    //             name,
    //             surname,
    //             username,
    //             email,
    //             password,
    //             city,
    //             birthday,
    //             role,
    //         } = req.body;
    // 		const candidate = await db.collection('').findOne({ username });
    //         if (candidate) {
    //             return res
    //                 .status(400)
    //                 .json({
    //                     message: "Пользователь с таким именем уже существует",
    //                 });
    // 		}
    // 		const hashPassword = bcrypt.hashSync(password, 7)
    // 		const user =
    //     } catch (e) {
    //         console.log(e);
    //         res.status(400), json({ message: "Registration error" });
    //     }
    // }
    // async login(req, res) {
    //     try {
    //     } catch (e) {
    //         console.log(e);
    //         res.status(400), json({ message: "Login error" });
    //     }
    // }
    // async getUsers(req, res) {
    //     try {
    //         const hashPassword = bcrypt.hashSync("qwertyuiop", 7);
    //         const admin = {
    //             admin: "Admin",
    //             surname: "Adminov",
    //             username: "admin",
    //             email: "nikitka.makhnev@mail.ru",
    //             password: hashPassword,
    //             city: "Екатеринубург",
    //             birthday: "26.04.2001",
    //             role: ["ADMIN"],
    //         };
    //         await db.collection("users").save();
    //         res.json("server work");
    //     } catch (e) {
    //         console.log(e);
    //         res.status(400), json({ message: "Login error" });
    //     }
    // }
}

module.exports = new authController();
