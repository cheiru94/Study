const cookieSession = require("cookie-session");
const express = require("express");
const { default: mongoose } = require("mongoose");
const passport = require("passport");
const app = express();
const path = require("path");
// const User = require("./models/users.model");

/* 환경변수 처리 */
const config = require("config");
const serverConfig = config.get("server");

/* main 라우터에서 불러오기 */
const mainRouter = require("./routes/main.router");
const usersRouter = require("./routes/users.router");

require("dotenv").config();

app.use(
  cookieSession({
    name: "coockie-session-my",
    keys: [process.env.COOKIE_ENCRYPTION_KEY],
  })
);

app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize()); //초기화 단계에서 각 요청(request)에 Passport를 사용할 수 있도록 설정
app.use(passport.session()); // passport는 사용자 세션을 지속적으로 유지하고 로그인 상태를 확인할 수 있
require("./config/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // form안에 있는 부분을 파싱해서 가져오기 위해 사용

/* views 엔진 셋업 : 디렉토리 이름, 경로*/
app.set("views", path.join(__dirname, "views")); // 번째 인자인 "views"는 설정의 식별자
app.set("view engine", "ejs"); /* view엔진은 ejs를 사용하 겠다. */

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("🟢 mongoDB 연결 완료");
  })
  .catch((err) => {
    console.log("error 내용 :", err);
  });

/* 정적파일 연결시키기 */
app.use("/static", express.static(path.join(__dirname, "public")));

/* MAIN_ROUTER */
app.use("/", mainRouter);

/* USERS_ROUTER */
app.use("/auth", usersRouter);

/* 서버 실행 */
const port = serverConfig.port;
app.listen(port, () => {
  console.log(`🟢 http://localhost:${port} 으로 서버 실행 중`);
});
