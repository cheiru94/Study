const { MongoClient } = require("mongodb");

const url = process.env.DB_URL; // 연결할 몽고디비 주소 url

let connectDB = new MongoClient(url).connect();

module.exports = connectDB;
