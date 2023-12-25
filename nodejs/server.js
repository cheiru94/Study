const express = require("express"); // express 라이브러리 사용하겠다
const app = express();
const { MongoClient, ObjectId } = require("mongodb"); /* 몽고디비랑 연결 */
const methodOverride = require("method-override"); /* method-override => form태그에서도 이제 put, delete 같은거 사용가능*/

app.use(methodOverride("_method")); /* method-override */

// public폴더안에 있는 파일들을 html에서 가져다가 쓰고 싶으면 서버파일에 app.use라는 문법으로 public 폴더를 등록
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs"); /* ejs 셋팅 */

/* 유저가 보낸 데이터들을 꺼내쓰기 */
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //이 미들웨어 함수는 HTTP POST 요청의 본문(body)에 인코딩된 데이터를 해석하고, req.body 객체에 채워넣어주는 역할을 합니다.

/* express-session , passport , passport-local */
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(
  session({
    secret: "암호화에 쓸 비번", //세션을 만들 때 세션 문자열 같은 것을 암호화 해서 만들기 때문에 , 그 암호화 할때 쓸 비번 같은것을 여기다 입력한다.
    resave: false, // 유저가 서버로 요청할 때마다 세션 갱신할 것인지
    saveUninitialized: false, // 유저가 로그인을 안해도 세션을 만들 것인지
  })
);

app.use(passport.session());

/* 몽고디비 연결 */
let db;
const url = // 연결할 몽고디비 주소 url
  "mongodb+srv://admin:admin@cluster0.ha7x0tk.mongodb.net/?retryWrites=true&w=majority";

new MongoClient(url) // 이 url로
  .connect() // 몽고디비에 접속
  .then((client) => {
    console.log("DB연결 성공");
    db = client.db("forum"); // ⭐️ 접속할DB 이름 ⭐️

    /* 서버 띄우기 : app.listen( 포트번호 , */
    app.listen(8085, () => {
      // 내 컴퓨터에 port하나 오픈하는 문법
      console.log("http://localhost:8085 에서 서버 실행중");
    });
  })
  .catch((err) => {
    console.log(err);
  });

/* ---------------------------------------------------------------------------------------------------------- */

/* 간단한 서버의 기능 */
app.get("/", (요청, 응답) => {
  // __dirname : Node.js 환경에서 사용되는 특별한 변수로, 현재 실행 중인 스크립트 파일의 디렉토리 경로를 나타냅니다 , 현재 스크립트 파일이 위치한 디렉토리의 경로를 얻을 수 있어요
  응답.sendFile(__dirname + "/index.html"); // 일반 index 파일 보낼 때
});

/* 테스트 */
// app.get("/news", (요청, 응답) => {
//   db.collection("post").insertOne({ title: "안녕하세요 " });
//   응답.send("뉴스임");
// });

/* 🟡 /list */
app.get("/list", async (요청, 응답) => {
  let result = await db.collection("post").find().toArray();
  // 응답.send(result[0].title); // 응답은 1번밖에 못 한다.

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

/* 🟡 /add 게시글 추가 */
app.post("/add", async (요청, 응답) => {
  console.log(요청.body);

  try {
    if (요청.body.title != "" && 요청.body.content != "") {
      await db.collection("post").insertOne({
        title: 요청.body.title,
        content: 요청.body.content,
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
  //id라는 변수에 입력받은  파라미터가 담겨 있다.
  try {
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.params.id) });
    console.log(result);

    if (result === null) {
      res.status(404).send("이상함");
    }
    // 찾은 값 전달하기
    res.render("detail.ejs", { result });
  } catch (e) {
    console.log("error: ", e);
    res.status(404).send("404");
  }
});

/* 🟡 /edit/:id 수정하기 페이지 */
// url에 어떤 게시글인지를 나타내는 파라미터가 포함되어 있어야 한다.
app.get("/edit/:id", async (req, res) => {
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.params.id) });
  console.log(result);
  res.render("edit.ejs", { result });
});

/* 🟡 edit 수정 요청 */
// app.post("/edit", async (req, res) => {
app.put("/edit", async (req, res) => {
  // await db.collection("post").updateMany(
  //   { like: 20 },
  //   { $set: { name: "아무개" } } //
  // );

  await db
    .collection("post")
    .updateOne(
      { _id: new ObjectId(req.body.id) },
      { $set: { title: req.body.title, content: req.body.content } }
    );
  console.log(req.body);
  res.redirect("/list");
});

//  내가 만든 버전
// app.post("/edit/:id", async (req, res) => {
//   try {
//     let result = await db
//       .collection("post")
//       .updateOne(
//         { _id: new ObjectId(req.params.id) },
//         { $set: { title: req.body.title, content: req.body.content } }
//       );
//     console.log(result);
//     res.redirect("/list");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("오류임");
//   }
// });

app.delete("/delete", async (req, res) => {
  // console.log(req.query);
  await db.collection("post").deleteOne({ _id: new ObjectId(req.query.docid) });
  res.send("삭제완료");
});

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

/* 제출한 아이디 / 비번 검사하는 코드 */
passport.use(
  // 유저가 로그인시 입력한 아이디 / 비번
  new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
    console.log(입력한아이디, 입력한비번);
    let result = await db
      .collection("user")
      .findOne({ username: 입력한아이디 });
    if (!result) {
      return cb(null, false, { message: "아이디 DB에 없음" });
    }
    if (result.password == 입력한비번) {
      return cb(null, result);
    } else {
      return cb(null, false, { message: "비번불일치" });
    }
  })
);

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res, next) => {
  // 아이디 비번을 DB와 비교하는 코드 실행됨 / 비교 작업이 완료되면 실행되는 콜백함수
  passport.authenticate("local", (error, user, info) => {
    if (error) return res.status(500).json(error);
    if (!user) return res.status(401).json(info.message);

    // 🟡 다 일치하면 로그인 시켜주기 : 실행되면 세션 만들어준다.
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  })(req, res, next);
});
