const passport = require("passport");
const User = require("../models/users.model");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

/* 🟡 serializeUser */
passport.serializeUser((user, done) => {
  /*  로그인 성공 후 한 번만 실행
  serializeUser에서 세션에 저장된 정보는 
  사용자의 식별자, 일반적으로는 사용자의 ID,
  그리고 이 정보는 세션 쿠키에 저장되어 클라이언트 브라우저에 전송된다.
*/
  console.log("serializeUser함수 실행됨");
  done(null, user.id); // done 함수를 호출해서 Passport에게 세션에 저장할 정보를 전달
  // 두 번째 인자(user.id)는 세션에 저장할 값 : 세션에 저장된 사용자 식별자(id)
});

/* 🟡 deserializeUser */
passport.deserializeUser((id, done) => {
  /* 
  세션에서 추출한 사용자 식별자를 기반으로 데이터베이스에서 
  사용자 정보를 조회하여 복원하는 역할 
*/
  User.findById(id)
    .then((user) => {
      console.log("deserializeUser함수 실행됨");
      done(null, user); // user는 DB에 저장된 사용자의 객체정보
    })
    .catch((err) => {
      done(err);
    });
});

/* 로컬 전략 */
const LocalStrategyConfig = new LocalStrategy(
  /* 아이디/비번이 DB와 일치하는지 검증  */
  // passport.authenticate('local')로 실행된다.
  { usernameField: "email", passwordField: "password" },
  // 사용자가 form 태그에서 name으로 입력한 email과, password가
  async (email, password, done) => {
    console.log("new LocalStrategy 실행됨");
    try {
      // 사용자가 입력한 내용과 DB안에 저장되어 있는 내용을 비교해본다.
      // 값이 들어있다면, document의 내용이 그대로 저장되어 나온다.
      const user = await User.findOne({ email: email.toLocaleLowerCase() });
      console.log("1. LocalStrategy에서 user에 둘어있는 내용: ", user);

      if (!user) {
        return done(null, false, { msg: `Email ${email} is not found` });
      }

      user.comparePassword(password, (err, isMatch) => {
        if (err) return done(err);

        // user에 유저 정보가 정상적으로 들어있을 경우, done메서드로 다시 authenticate로 넘겨준다.
        if (isMatch) {
          console.log("LocalStrategy에서 user 객체 넘겨줌");
          return done(null, user); // 정상처리되면 authenticate로 넘겨주기.
        }

        return done(null, false, {
          msg: "이메일 혹인 비밀번호가 틀린거 같아... 🤔",
        });
      });
    } catch (err) {
      return done(err);
    }
  }
);
passport.use("local", LocalStrategyConfig);

/* 구글 전략 */
// require("dotenv").config();

const googleStrategyConfig = new GoogleStrategy(
  // passport.authenticate('google')로 실행된다.
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback", // 사용자가 로그인 성공 시 이 URL로 리디렉션
    scope: ["email", "profile"],
  },
  // Google 인증이 성공하면 실행되는 콜백 함수
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      } else {
        const user = new User();
        user.email = profile.emails[0].value;
        user.googleId = profile.id;

        await user.save();

        done(null, user);
      }
    } catch (err) {
      done(err);
    }
  }
);
// passport.use를 사용하여 Google 전략을 Passport에 등록
passport.use("google", googleStrategyConfig);
