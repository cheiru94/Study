const router2 = require("express").Router();

router2.get("/sports", (요청, 응답) => {
  응답.send("스포츠 게시판");
});
router2.get("/game", (요청, 응답) => {
  응답.send("게임 게시판");
});

module.exports = router2;
