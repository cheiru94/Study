const passport = require("passport");
const User = require("../models/users.model");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email: email.toLocaleLowerCase() });

        if (!user) {
          return done(null, false, { msg: `Email ${email} is not found` });
        }

        user.comparePassword(password, (err, isMatch) => {
          if (err) return done(err);

          if (isMatch) {
            return done(null, user);
          }

          return done(null, false, {
            msg: "이메일 혹인 비밀번호가 틀린거 같아... 🤔",
          });
        });
      } catch (err) {
        return done(err);
      }
    }
  )
);
