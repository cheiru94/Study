const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // name 필드
  name: {
    type: String,
    required: [true, "유저는 반드시 이름을 명시해야한다"], // required 속성을 사용하여 이름이 반드시 필요하며, 만약 값이 주어지지 않을 경우 "유저는 반드시 이름을 명시해야한다"는 에러 메시지를 반환
    unique: true, // unique 속성을 사용하여 이름이 고유해야 한다고 정의
  },
  // token 필드
  token: {
    type: String,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

//                            모델 이름 , 이 모델이 사용할 스키마
module.exports = mongoose.model("User", userSchema); // Mongoose 모듈에서 모델을 생성하는 메서드
