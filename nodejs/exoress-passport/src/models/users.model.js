const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true, // 똑같은 email을 사용하지 못하게
  },
  password: {
    type: String,
    minLength: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // 중복인 값을 방지하기 위함
  },
});

const salutRounds = 10;

userSchema.pre("save", function (next) {
  let user = this;

  // 비밀번호가 변경될 때만
  if (user.isModified("password")) {
    // salt를 생성
    bcrypt.genSalt(salutRounds, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// password ==  plainPassword
userSchema.methods.comparePassword = function (plainPassword, cb) {
  // plainPassword = 클라이언트가 입력한 비밀번호 , this.password = 데이터베이스에 저장된 비밀번호

  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

/* 스키마로 모델 생성하기 :  mongoose.model( 모델이름, 스키마 )*/
const User = mongoose.model("User", userSchema);

module.exports = User;
