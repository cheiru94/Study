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
  const user = { name: username };

  /* JWT 토큰 생성 : Payload + SecretText */
  const accessToken = jwt.sign(user, secretText);

  res.json({ accessToken });
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

const port = 4000;
app.listen(port, () => {
  console.log(`http://localhost:${port} 로 서버 가동`);
});
