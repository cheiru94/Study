const router = require("express").Router();

let connectDB = require("./../database.js");
let db;

connectDB
  .then((client) => {
    console.log("DB연결 성공");
    db = client.db(process.env.DB_NAME);
  })
  .catch((err) => {
    console.log(err);
  });

router.get("/shirts", async (req, res) => {
  await db.collection("post").find().toArray(); // 이렇게 사용 가능
  res.send("셔츠 파는 페이지");
});

router.get("/pants", (req, res) => {
  res.send("바지 파는 페이지");
});

module.exports = router;
