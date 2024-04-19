//check: 외부에서 이 모듈을 사용할 때 io 객체를 매개변수로 받아서 실행

const userController = require("../Controllers/user.controller");
const chatController = require("../Controllers/chat.controller");

// check: require("./utils/io")(io); 로 사용
module.exports = function (io) {
  //   io는 Socket.IO 서버 인스턴스를 의미 ( io관련 모든 것들을 처리한다)

  // !: 듣는 함수  on / 말하는 함수  emit
  /* 
    - io.on() : Socket.IO에서 특정 이벤트가 발생할 때 호출할 함수를 등록,
    - connection : 이벤트는 클라이언트가 서버에 연결될 때 발생
    - socket 매개변수를 통해 연결된 클라이언트의 소켓 객체에 접근 , 이 객체를 사용하여 특정 클라이언트와 통신할 수 있습니다.
       =>연결된사람을 socket이라고 함, 연결된 사람의 정보를 매개변수로 받아올 수 있다..
    - socket : 연결된 클라이언트의 소켓 객체 
       => socket 객체는 개별 클라이언트와 서버 간의 양방향 통신을 가능하게 하는 중요한 역할을 합니다. 
  */

  //! 클라이언트가 서버에 연결되면 실행
  io.on("connection", async (socket) => {
    console.log(`클라이언트님이 연결됨  =>  🩷  ${socket.id} 🩷    `);

    //! 🟢 login , 가 왔을 때 실행되는 함수 ()=>{}
    socket.on("login", async (userName, cb) => {
      console.log("userName:", userName);
      //check: login으로 emit한 내용을 받아올 수 있다. ->
      try {
        console.log(userName);
        const user = await userController.saveUser(userName, socket.id);

        // 시스템(서버)에서 알림주기
        const welcomeMsg = {
          chat: `${user.name}님이 들어왔슴당~`,
          user: { id: null, name: "system" },
        };

        // 유저가 처음 로그인 하면 환영 메세지
        io.emit("message", welcomeMsg);

        //check: 서버가 클라이언트에게 특정 데이터를 응답 -> 이내용을 클라이언트에서 받음
        cb({ status: true, data: user });
      } catch (error) {
        cb({ status: false, error: error.message });
      }
    });

    //! 🟠 sendMessage , 가 왔을 때 실행되는 함수 ()=>{}
    socket.on("sendMessage", async (message, cb) => {
      const user = await userController.checkUser(socket.id); //check: socket.id로 유저 찾기
      const newMsg = await chatController.saveChat(message, user); //check: 메시지 저장

      //! 🟣 클라이언트야 메세지 새로 생겼다! 다시 받아라
      io.emit("message", newMsg);
      cb({ status: true });
    });

    // 유저 나갈 때
    socket.on("disconnect", () => {
      console.log(socket.id, "유저 나가뿠다.");
    });
  });
};
