const mongoose = require("mongoose");

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

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // bcrypt compare 비교
  // plainPassword = 클라이언트가 입력한 비밀번호 , this.password = 데이터베이스에 저장된 비밀번호
  if (plainPassword == this.password) {
    cb(null, true); // null은 에러 매개변수
  } else {
    cb(null, false);
  }

  return cb({ error: "error" });
};

/* 스키마로 모델 생성하기 :  mongoose.model( 모델이름, 스키마 )*/
const User = mongoose.model("User", userSchema);

module.exports = User;
