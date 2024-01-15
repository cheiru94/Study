const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // form안에 잇는 부분을 파싱해서 가져오기 위해 사용

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ha7x0tk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("🟢 mongoDB 연결 완료");
  })
  .catch((err) => {
    console.log("error 내용 :", err);
  });

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(4000, () => {
  console.log("🟢 http://localhost:4000 으로 서버 실행 중");
});
