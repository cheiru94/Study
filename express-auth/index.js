const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const secretText = "superSecret";

const posts = [
  {
    username: "Ichiban",
    title: "Post1",
  },
  {
    username: "Hasebe",
    title: "Post2",
  },
];

//body로 들어오는 것 분석
app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username }; // payload

  /* JWT 토큰 생성 : Payload + SecretText */
  const accessToken = jwt.sign(user, secretText);

  res.json({ accessToken });
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

function authMiddileware(req, res, next) {
  // 토큰을 request header에서 가져오기
  const authHeader = req.headers["authorization"]; // Bearer ojojojo.oldfwlelfw.ofjwefj 까지 추출
  console.log("authHeader: ", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token: ", token);

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, secretText, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // 이렇게 user 값을 넣으면 다음 미들웨어에서 user 값을 사용할 수 있다.
    next();
  });
}

const port = 4000;
app.listen(port, () => {
  console.log(`http://localhost:${port} 로 서버 가동`);
});
