//! *새로운 Express 애플리케이션 객체를 생성*

// http를 통해서 서버를 만들고 , 그 위에 웹소캣도 얹고, express로 만든 서버도 올린다.

/* 
   Node.js에서는 http 모듈을 사용하여 기본적인 HTTP 서버를 구축할 수 있습니다
   이 서버는 웹 브라우저의 요청을 받고 응답을 보내는 역할을 합니다.
*/

require("dotenv").config(); // 환경 변수를 .env 파일로부터 로드하여 process.env 객체에 추가

/* app */
const app = require("./app"); //  express() + Cors + mongoose연결
//! 1. HTTP 서버를 생성
const { createServer } = require("http");
const httpServer = createServer(app); // Ex🟡press 애플리케이션을 사용하여 HTTP 서버를 생성합니다 :  HTTP 요청 처리와 응답 전송을 위한 기본적인 서버 설정이 완성

//! 2. socket.io 라이브러리로부터 Server 클래스를 불러와 웹소켓 기능을 구현할 준비를 합니다.
const { Server } = require("socket.io");

//! 3. 소캣 안에 http 서버를 올린다.
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // 들어올수 있느놈 허가 하는 부분 ( 프론트엔드 주소 부분 )
  },
});

//! 소캣 io를 넣어 함수 실행
require("./utils/io")(io); // 함수를 리턴 했기 때문에 실행 시켜 줘야한다.

// http 서버를 감시하게 실행
httpServer.listen(process.env.PORT, () => {
  console.log(
    `⭐️ ${process.env.PORT}번으로 서버 리스닝 포트`,
    process.env.PORT
  );
});
