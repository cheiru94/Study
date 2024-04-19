const express = require("express");
const app = express(); // express 객체를 생성

const mongoose = require("mongoose"); // 몽구스 불러오기

require("dotenv").config(); // : 환경 변수를 .env 파일에서 불러와 프로세스 환경에 추가

/// CORS(Cross-Origin Resource Sharing)를 허용하기 위한 미들웨어입니다. 다른 도메인의 프론트엔드에서 이 서버에 접근할 수 있게 해줍니다.
const cors = require("cors");

app.use(cors()); /// express에 연결하고, 모든 라우트에 대해 CORS를 활성화
/* 
 //check 이렇게 특정 부분을 지정해줄 수도 있다.
  app.use(cors({
  origin: 'https://example.com', // 특정 도메인만 허용
  methods: ['GET', 'POST'], // 특정 HTTP 메소드만 허용
}));
*/

//! MongoDB에 연결
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
  });

/// app 객체를 다른 Node.js 파일에서 사용할 수 있도록 내보냅니다
module.exports = app;
