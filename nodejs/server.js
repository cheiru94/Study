const express = require("express"); // express 라이브러리 사용하겠다
const app = express();

/* 서버 띄우기 : app.listen( 포트번호 , */
app.listen(8080, () => {
  // 내 컴퓨터에 port하나 오픈하는 문법
  console.log("http://localhost:8080 에서 서버 실행중");
});

/* 포트란? */
/* 
  
*/

// 간단한 서버의 기능
app.get("/", (요청, 응답) => {
  응답.send("콘방와"); // 메인페이지로 접속하면 "콘방와" 출력
});
