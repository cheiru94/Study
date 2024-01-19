const cookieSession = require("cookie-session");
const express = require("express");
const { default: mongoose } = require("mongoose");
const passport = require("passport");
const app = express();
const path = require("path");
const User = require("./models/users.model");
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("./middlewares/auth");

const cookieEncryptionKey = "supersecret-key";

app.use(
  cookieSession({ name: "coockie-session-my", keys: [cookieEncryptionKey] })
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
  .connect(
    "mongodb+srv://admin:admin@cluster0.ha7x0tk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("🟢 mongoDB 연결 완료");
  })
  .catch((err) => {
    console.log("error 내용 :", err);
  });

app.listen(4000, () => {
  console.log("🟢 http://localhost:4000 으로 서버 실행 중");
});
/* 정적파일 연결시키기 */
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", checkAuthenticated, (req, res) => {
  res.render("index");
});

/* 😄 로그인 */
app.get("/login", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  res.render("login");
});

app.post("/login", (req, res, next) => {
  /* 미들웨어 안에 있는 미들웨어 */
  // passport.authenticate("local" 까지가 new LocalStrategy를 실행
  //🔥 user 변수에 들어가는 값은 LocalStrategy에서 인증을 시도한 후에 비동기적으로 반환된 값
  passport.authenticate("local", (err, user, info) => {
    console.log("2. 받아온 user 내용 : ", user);
    if (err) {
      return next(err); // express의 에러처리기로 보내기
    }
    if (!user) {
      // 찾는 유저나, 비밀번호가 틀렸을 때
      console.log("no user found 😅");
      return res.json({ msg: info });
    }

    /* 🟡 유저가 있고, 비밀번호도 있을 떄 🟡 */
    // LocalStrategy의 done()정보를 토대로, 로그인 성공 시 사용자 정보 객체와 함께 req.login()를 자동으로 호출
    req.logIn(user, (err) => {
      // 🟡 req.login 메서드가 passport.serializeUser() 호출 : 세션 만들기

      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  })(req, res, next);
});

app.post("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

/* 😄 회원 가입 */
app.get("/signup", checkNotAuthenticated, (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  // User 객체를 생성
  const user = new User(req.body);
  // User 컬렉션(테이블)에 user를 저장
  try {
    await user.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
});
