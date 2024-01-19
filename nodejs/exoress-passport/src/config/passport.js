const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    /* 사용자가 form에서 입력한 정보를 가져온다. done은 콜백함수 : 인증과정이 완료되었을 떄 호출되며, 인증의 성공 유무에 따라서 에러를 passport에 알려준다. */
    (email, password, done) => {
      User.findOne({ email: email.toLocaleLowerCase() }, (err, user) => {
        if (err) return done(err);

        if (!user)
          return done(null, false, { msg: `Email ${email} is not found` });

        user.comparePassword(password, (err, isMatch) => {
          if (err) return done(err);

          if (isMatch) {
            return done(null, user);
          }

          return done(null, false, { msg: "Invalid email or password 🤔" });
        });
      });
    }
  )
);
