/* 🟡🟢 express 라이브러리 사용하겠다  */
const express = require("express");
const app = express();

/* 🟡🟢 dotenv  */
require("dotenv").config();

/* 🟡🟢 몽고디비랑 연결 */
const { MongoClient, ObjectId } = require("mongodb");

let connectDB = require("./database.js"); // db 파일에서 불러와서 사용함
let db;
const url = process.env.DB_URL;
let changeStream
connectDB // 불러온 것 적용시키기 : 여기까지만 하면 계속해서 DB에서 불러와 사용할 필요가 없다
  .then((client) => {
    console.log("DB연결 성공");
    db = client.db(process.env.DB_NAME); // ⭐️ 접속할DB 이름 ⭐️


    let condition = [{ $match: { operationType:'insert'} }]
    /* post 컬렉션의 documentrk 생성 수정 삭제 될때마다 작동 */
    changeStream = db.collection('post').watch(condition);

    /* 🟡🟢 서버 띄우기 : app.listen( 포트번호 , */
    server.listen(process.env.PORT, () => {
      // 내 컴퓨터에 port하나 오픈하는 문법
      console.log(`http://localhost:${process.env.PORT} 에서 서버 실행중`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

/* 🟡🟢 method-override : put ,delete 메서드 사용가능*/
const methodOverride = require("method-override"); /* method-override => form태그에서도 이제 put, delete 같은거 사용가능*/
app.use(methodOverride("_method"));

/* 🟡🟢 public폴더안에 있는 파일들을 html에서 가져다가 쓰고 싶으면 서버파일에 app.use라는 문법으로 public 폴더를 등록 */
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs"); /* ejs 셋팅 */

/* 🟡🟢 유저가 보낸 데이터들을 꺼내쓰기 */
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //이 미들웨어 함수는 HTTP POST 요청의 본문(body)에 인코딩된 데이터를 해석하고, req.body 객체에 채워넣어주는 역할을 합.find(니다.

/* 🟡🟢 express-session , passport , passport-local */
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const MongoStore = require("connect-mongo");

app.use(passport.initialize());
// app.use(
const sessionMiddleware = session({
  secret: "암호화에 쓸 비번", //세션을 만들 때 세션 문자열 같은 것을 암호화 해서 만들기 때문에 , 그 암호화 할때 쓸 비번 같은것을 여기다 입력한다.
  resave: false, // 유저가 서버로 요청할 때마다 세션 갱신할 것인지
  saveUninitialized: false, // 유저가 로그인을 안해도 세션을 만들 것인지
  cookie: { maxAge: 60 * 60 * 1000 },
  store: MongoStore.create({
    mongoUrl: url,
    dbName: process.env.DB_NAME,
  }),
});
// );
// express에 세션 미들웨어 사용 선언
app.use(sessionMiddleware);
app.use(passport.session());

/* 🟡🟢 비밀번호 해쉬 처리 */
const bcrypt = require("bcrypt");

/* 🟡🟢 S3 */
const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = new S3Client({
  region: "ap-northeast-2", // 서울로 설정
  credentials: {
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "jaeilforum1",
    key: function (요청, file, cb) {
      cb(null, Date.now().toString()); //업로드시 파일명 변경가능
    },
  }),
});

/* 🟡🟢 SOKET.IO */
const { createServer } = require("http");
const { Server } = require("socket.io");
const { setInterval } = require("timers/promises");
const server = createServer(app);
const io = new Server(server);

/* ---------------------------------------------------------------------------------------------------------- */

/* 🟡 간단한 서버의 기능 */
app.get("/", (요청, 응답) => {
  // console.log(요청.user);
  // __dirname : Node.js 환경에서 사용되는 특별한 변수로, 현재 실행 중인 스크립트 파일의 디렉토리 경로를 나타냅니다 , 현재 스크립트 파일이 위치한 디렉토리의 경로를 얻을 수 있어요
  console.log(요청.user);
  응답.sendFile(__dirname + "/index.html"); // 일반 index 파일 보낼 때
});

/* 테스트 */
// app.get("/news", (요청, 응답) => {
//   db.collection("post").insertOne({ title: "안녕하세요 " });
//   응답.send("뉴.find(스임");
// });

function checkTime(req, res, next) {
  let time = new Date();
  next();
}

/* 🟡 /list */
app.get("/list", checkTime, async (요청, 응답) => {
  let result = await db.collection("post").find().toArray();
  // 응답.send(result[0].title); /.find(/ 응답은 1번밖에 못 한다.

  /* 
    일반적으로 render 메서드는 템플릿 엔진을 사용하여 HTML 페이지를 생성하고, 
    그것을 응답으로 클라이언트에게 전달하는 데 사용됩니다. 
    Express에서는 기본적으로 views 폴더가 템플릿 파일들을 저장하는 곳으로 간주됩니다. 
  */
  응답.render("list.ejs", { result });
});

/* 🟡 /write */
app.get("/write", (요청, 응답) => {
  응답.render("write.ejs");
});

/* 🟡 /add 게시글 추가  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 */
app.post("/add", upload.array("img1", 3), async (요청, 응답) => {
  // console.log(요청.user);
  try {
    if (요청.body.title != "" && 요청.body.content != "") {
      let imgs = 요청.files.map((img) => img.location);

      // console.log("imgs: ", imgs);
      await db.collection("post").insertOne({
        title: 요청.body.title,
        content: 요청.body.content,
        img: imgs ? imgs : "",
        user: 요청.user._id,
        username: 요청.user.username,
        // img: 요청.file.location,
      });
      응답.redirect("/list"); // redirect의 경우 url경로
    } else {
      응답.send("글자를 입력하시라");
    }
  } catch (error) {
    console.log(error);
    응답.status(500).send("서버 에러 발생");
  }
});

/* 🟡 /detail?:id 상세보기  */
app.get("/detail/:id", async (req, res) => {
  console.log(req.params);
  //id라는 변수에 입력받은  파라미터가 담겨 있다.
  try {
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.params.id) });

    //  댓글 가져오기
    let comments = await db
      .collection("comment")
      .find({ post_id: req.params.id })
      .toArray();

    // 유저 아이디
    let username = req.user.username;

    if (result === null) {
      res.status(404).send("이상함");
    }
    // 찾은 값 전달하기
    res.render("detail.ejs", { result, comments, username });
  } catch (e) {
    console.log("error: ", e);
    res.redirect("/login");
    // res.status(404).send("404, 로그인이 되어있지 않습니다.");
  }
});

app.post("/detailDelete/:id/:cId", (req, res) => {
  console.log(req.params.id);
  db.collection("comment").deleteOne({ _id: new ObjectId(req.params.id) });
  res.redirect("/detail/" + req.params.cId);
});

/* 🟡 /edit/:id 수정하기 페이지 */
// url에 어떤 게시글인지를 나타내는 파라미터가 포함되어 있어야 한다.
app.get("/edit/:id", async (req, res) => {
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.params.id) });

  // console.log("result.user: ", result.user.toString());  => 이렇게 ObejctId 로 저장된 내용은 toString으로 변경해서 사용해야 하더라
  // console.log("req.user: ", req.user._id.toString());
  // console.log(result.user.toString() == req.user._id.toString());
  if (result.user.toString() == req.user._id.toString()) {
    res.render("edit.ejs", { result });
  } else {
    res.send("니가 작성한 글이 아니올시다 이양반아");
  }
});

/* 🟡 edit 수정 요청 */
// app.post("/edit", async (req, res) => {
app.put("/edit", async (req, res) => {
  await db
    .collection("post")
    .updateOne(
      { _id: new ObjectId(req.body.id) },
      { $set: { title: req.body.title, content: req.body.content } }
    );
  // console.log(req.body);

  res.redirect("/list");
});

/* 🟡 삭제 요청  */
app.delete("/delete", async (req, res) => {
  // console.log(req.query);
  console.log('현 로그인유저:', req.user._id);
  await db.collection("post").deleteOne({
    _id: new ObjectId(req.query.docid),
    user: new ObjectId(req.user._id),
  });
  console.log("삭제완료");
  res.send("삭제완료");
});

/* 🟡 페이지 네이션 1 */
app.get("/list/:id", async (req, res) => {
  let upTo = Number(req.params.id);
  console.log(req.params.id);
  let result = await db
    .collection("post")
    .find()
    .skip((upTo - 1) * 5)
    .limit(5)
    .toArray();
  res.render("list.ejs", { result: result });
});

/* 🟡 페이지 네이션 2 */
app.get("/list/next/:id", async (req, res) => {
  let upTo = Number(req.params.id);
  console.log(req.params.id);
  let result = await db
    .collection("post")
    .find({ _id: { $gt: new ObjectId(req.params.id) } })
    .limit(5)
    .toArray();
  res.render("list.ejs", { result: result });
});

/* 🟡 제출한 아이디 / 비번 검사하는 코드 ⭐️⭐️⭐️⭐️⭐️⭐️⭐️ */
passport.use(
  // 유저가 로그인시 입력한 아이디 , 비번이 DB의 내용과 일치하는지 비교
  new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
    // cd = done
    // 1. DB에서 입력한 아이디로, 계정이 있는지 확인
    let result = await db
      .collection("user")
      .findOne({ username: 입력한아이디 });

    // 2. DB에 계정이 없으면 에러
    if (!result) {
      return cb(null, false, { message: "아이디 DB에 없음" });
    }

    // 해쉬처리된 비번으로 확인하기
    if (await bcrypt.compare(입력한비번, result.password)) {
      return cb(null, result);
    } else {
      return cb(null, false, { message: "비번불일치" });
    }
  })
);

/* 🟡🟡🟡 세션 다큐먼트 + 쿠키 만들기 🟡🟡🟡 */
// 226라인 req.logIn 을 실행할 때(유저가 로그인 할 때) 마다 이 안에 있는 내용이 실행된다.
passport.serializeUser((user, done) => {
  // 비동기 처리 시켜주는 메서드
  process.nextTick(() => {
    //   {세션 document에 기록될 내용}  => 이런 내용 기록된 세션 document 만들어주고, 쿠키도 자동으로 하나 만들어서 유저에게 보내준다.
    done(null, { id: user._id, username: user.username });
  });
});

/* 🟡🟡🟡 쿠키 분석 🟡🟡🟡 */
passport.deserializeUser(async (user, done) => {
  let result = await db
    .collection("user")
    .findOne({ _id: new ObjectId(user.id) });
  delete result.password;

  process.nextTick(() => {
    return done(null, result);
  });
});

app.get("/login", async (req, res) => {
  console.log(req.user);

  res.render("login.ejs");
});

app.post("/login", (req, res, next) => {
  // 아이디 비번을 DB와 비교하는 코드 실행됨 / 비교 작업이 완료되면 실행되는 콜백함수
  passport.authenticate("local", (error, user, info) => {
    if (error) return res.status(500).json(error);
    if (!user) return res.status(401).json(info.message);

    // 다 일치하면 로그인 시켜주기 : 실행되면 세션 만들어준다. => 로그인 시켜줌
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  })(req, res, next);
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const users = await db.collection("user").find().toArray();

  const existingUser = users.find(
    (user) => user.username === req.body.username
  );
  if (existingUser) {
    return res.status(400).send("이미 있는 계정입니다. 다시 입력하세요.");
  }

  let hashedPw = await bcrypt.hash(req.body.password, 10);

  await db.collection("user").insertOne({
    username: req.body.username,
    password: hashedPw,
  });

  res.redirect("/");
});

app.use("/shop", require("./routes/shop.js")); // require("./routes/shop.js")

app.use("/board/sub", require("./routes/sub.js")); // require("./routes/sub.js")

app.get("/search", async (req, res) => {
  let sc = [
    {
      $search: {
        index: "title_index",
        text: { query: req.query.val, path: "title" },
      },
    },
    { $sort: { _id: 1 } },
  ];
  let result = await db.collection("post").aggregate(sc).toArray();
  res.render("search.ejs", { result });
});

app.post("/createComment", async (req, res) => {
  console.log(req.query.comment);
  await db.collection("comment").insertOne({
    comment: req.query.comment,
    post_id: req.query.postId,
    user_id: req.user._id,
    user: req.user.username,
  });
  res.redirect("back");
});

/* chating */

// app.get("/chating", async (req, res) => {
//   let user = req.user._id.toString();
//   let chatList = await db
//     .collection("chat")
//     .find({ _id: new ObjectId(user) })
//     .toArray();

//   res.render("chatList.ejs", { chatList });
// });

// app.get("/chat/:id", async (req, res) => {
//   // 해당 게시글 id 값 찾아와서 , 그 게시글에 작성된 대화 창 만들기
//   console.log(req.params.id);
//   await db.collection("chating").find().array();

//   res.render("chat.ejs");
// });

// ✏️ 채팅방 만들기
app.get("/chat/request", async (req, res) => {
  const currentUserID = req.user._id || "비로그인";
  const writerID = new ObjectId(req.query.writerId);

  // 이미 로그인 한 사용자가 해당 글을 게시한 사용자와의 대화기록이 있는지 확인
  const existingChatroom = await db.collection("chatroom").findOne({
    member: {
      $all: [currentUserID, writerID],
    },
  });

  // 확인용
  console.log("반환값:", !!existingChatroom);

  if (existingChatroom) {
    // 있다면 새로운 방 생성 x
    res.redirect("/chat/list");
  } else {
    // 없다면 새로운 방 생성
    await db.collection("chatroom").insertOne({
      member: [currentUserID, writerID],
      data: new Date(),
    });
    res.redirect("/chat/list");
  }
  // // if (condition) {
  // await db.collection("chatroom").insertOne({
  //   // _id 값은 자동으로 생성된다.
  //   /* 채팅 참여자 */ member: [req.user._id, new ObjectId(req.query.writerId)],
  //   /* 날짜 */ data: new Date(),
  // });
  // res.redirect("/chat/list"); // 채팅방 목록 페이지로 이전하기
  // // }
});

// ↓↓↓↓↓↓↓↓↓↓↓↓   /chat/request  ->  /chat/list   ↓↓↓↓↓↓↓↓↓↓↓↓

// ✏️ 자신이 속한 채팅방 목록 보기
app.get("/chat/list", async (req, res) => {
  let user = req.user._id.toString() || "";
  let username = req.user.username.toString() || "";
  console.log("로그인한 유저: ", user, "|", username);
  let result = await db
    .collection("chatroom")
    // member 자체가 array이기 때문에 원하는 내용만 넣으면 그에 관한 내용을 찾아 준다.
    .find({ member: req.user._id }) // 현재 로그인한 유저가 들어있는 모든 채팅방을 검색한다.
    .toArray(); //그 내용을 배열로써 반환한한다.

  res.render("chatList.ejs", { result: result });
});

// ✏️ 해당되는 대화방 입장
app.get("/chat/detail/:id", async (req, res) => {
  let roomNum = req.params.id;

  let user = req.user._id.toString() || "";
  console.log(user);

  let result = await db
    .collection("chatroom")
    .findOne({ _id: new ObjectId(roomNum) });

  let chatMessage = await db
    .collection("chatMessage")
    .find({ parentRoom: new ObjectId(roomNum) })
    .toArray();

  console.log("chatMessage", chatMessage);
  res.render("chatDetail.ejs", { result, user, chatMessage });
});

io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});
/* 유저가 웹 소캣 연결시 서버에서 코드 실행시키기  */
io.on("connection", (socket) => {
  if (socket.request.session.passport && socket.request.session.passport.user) {
    console.log(
      "소켓에 저장된 내용: ",
      socket.request.session.passport.user.id
    );
  } else {
    console.log("사용자가 로그인되지 않았습니다.");
  }
  console.log("웹 소캣 연결함"); // 연결 잘 되었는지 확인用

  /* 요청 받은 방 개설*/
  socket.on("ask-join", (roomNum) => {
    socket.join(roomNum);
  });

  // -> 유저로 부터 받은 요청
  socket.on("message-send", async (data) => {
    console.log("data: ", data);
    // 💿 db에 요청 받은 내용 저장하기 💿
    await db.collection("chatMessage").insertOne({
      parentRoom: new ObjectId(data.room),
      content: data.message,
      who: new ObjectId(socket.request.session.passport.user.id),
    });
    io.to(data.room).emit("message-broadcast", {
      sender: data.sender,
      message: data.message,
    });
  });
});

/* SSE 구현 */
app.get('/stream/list',  (req, res) => {

  res.writeHead(200, {
    "Connection": "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  })

  
  changeStream.on('change', (result) => {
    console.log(result.fullDocument);
    res.write('event: msg\n');
    res.write(`data: ${JSON.stringify(result.fullDocument)}\n\n`);
  })

});
