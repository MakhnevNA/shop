const { MongoClient } = require("mongodb");

const URL =
    "mongodb+srv://admin:NfJ6dTDdvUjV3Y0G@cluster0.bwvh0aw.mongodb.net/shop?retryWrites=true&w=majority";

let dbConnection;

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect(URL)
            .then((client) => {
                console.log("Connect to MongoDB");
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                return cb(err);
            });
    },
    getDb: () => dbConnection,
};
