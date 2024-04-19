const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    // name 필드
    chat: String,
    user: {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "User", // Chat 이라는 데이터가 사용자 (User)와 관께가 있다는 것을 나타낸다. => 외래키 같은 개념이다.
      },
      name: String,
    },
  },
  { timestamps: true }
);

//                            모델 이름 , 이 모델이 사용할 스키마
module.exports = mongoose.model("Chat", chatSchema); // Mongoose 모듈에서 모델을 생성하는 메서드
