const User = require("../Models/users");
const userController = {};

//check  유저 정보 저장
userController.saveUser = async (userName, sid) => {
  //! 1. 이미 있는 유저인지 확인
  let user = await User.findOne({ name: userName });

  ///! 1-1 없음 : 새로운 유저 정보 생성
  if (!user) {
    user = new User({ name: userName, token: sid, online: true });
  }

  ///! 1-2 이미 있는 유저라면 연결정보 token 값만 변경
  user.token = sid;
  user.online = true;

  await user.save(); // 정보 저장
  // 정보 반환
  return user;
};

//check 유저 찾기
userController.checkUser = async (sid) => {
  const user = await User.findOne({ token: sid });

  if (!user) {
    throw new Error("🔴유저가 없음");
  }

  return user;
};

module.exports = userController;
