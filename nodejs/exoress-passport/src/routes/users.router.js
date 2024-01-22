const express = require("express");
const usersRouter = express.Router();
const { checkNotAuthenticated } = require("../middleware/auth");
const passport = require("passport");
const User = require("../models/users.model");

/* 📎 로그인 */
usersRouter.post("/login", (req, res, next) => {
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

    /* 🟡 유저가 있고, 비밀번호도 있을 때 🟡 */
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

/* 📎 로그아웃 */
usersRouter.post("/auth/logout", (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

/* 📎 회원가입 */
usersRouter.get("/signup", checkNotAuthenticated, (req, res) => {
  res.render("signup");
});

usersRouter.post("/signup", async (req, res) => {
  // User 객체를 생성
  const user = new User(req.body);
  // User 컬렉션(테이블)에 user를 저장
  try {
    await user.save();

    // 📧 이메일 보내기
    sendMail("cheiru94@gmai.com", "이재일", "welcome");

    res.redirect("login");
    // return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
});
// 9bda0a7e56893d81b04eed7524b3dfd0 카카오키

/* 📎 Google OAuth */
usersRouter.get("/google", passport.authenticate("google"));
usersRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = usersRouter;
