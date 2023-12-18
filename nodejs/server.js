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

/* 몽고디비 연결 */
let db;
const url = // 연결할 몽고디비 주소 url
  "mongodb+srv://admin:admin@cluster0.ha7x0tk.mongodb.net/?retryWrites=true&w=majority";

new MongoClient(url) // 이 url로
  .connect() // 몽고디비에 접속
  .then((client) => {
    console.log("DB연결성공");
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

// 간단한 서버의 기능
app.get("/", (요청, 응답) => {
  // __dirname : Node.js 환경에서 사용되는 특별한 변수로, 현재 실행 중인 스크립트 파일의 디렉토리 경로를 나타냅니다 , 현재 스크립트 파일이 위치한 디렉토리의 경로를 얻을 수 있어요
  응답.sendFile(__dirname + "/index.html"); // 일반 index 파일 보낼 때
});

// 테스트
app.get("/news", (요청, 응답) => {
  // db.collection("post").insertOne({ title: "안녕하세요 " });
  // 응답.send("뉴스임");
});

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
      응답.redirect("/list");
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

  await db.collection("post").updateOne(
    { _id: new ObjectId(req.body.id) },
    { $set: { title: req.body.title, content: req.body.content } } //
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

app.get("/delete/:id", async (req, res) => {
  console.log(req.query);
});
