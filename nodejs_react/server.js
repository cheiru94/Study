const express = require("express");
const path = require("path");
const app = express();

// npm install cors 설치후 사용 : ajax 요청
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.listen(8080, () => {
  console.log("8080번으로 서버 작동");
});

app.use(express.static(path.join(__dirname, "test-react/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/test-react/public/index.html"));
});


app.get("/detail", (req, res) => {
  let datas = { name: "ichiban", age: 31, gender: "man", location: ":tokyo" };
  res.json(datas); // 서버 응답을 JSON 형식으로 변환해서 클라이언트에게 보내는 역할 : Express에서만 사용 가능한 메서드
});

// 리액트 라우터 사용하는 경우, 이거 최 하단에 추가해 놓기
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});