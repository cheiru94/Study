const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const secretText = "superSecret";
const refreshSecretText = "superUltraSecret";

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

/* DB대신에 refreshtoken을 관리*/
let refreshTokens = [];

//body로 들어오는 것 분석
app.use(express.json());

// cookies로 들어오는 것 분석
app.use(cookieParser());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username }; // payload

  /* 🟢 JWT 토큰 생성 : jwt.sign( Payload , SecretText ) */
  const accessToken = jwt.sign(user, secretText, { expiresIn: "30s" }); // 만료시간 30초

  /* 🟢 JWT refreshToken 발행  :  원래는 DB에 저장해서 관리한다. */
  const refreshToken = jwt.sign(user, refreshSecretText, { expiresIn: "1d" }); // 만료시간 하루

  // 임시로 DB대신 위에있는 배열에 저장
  refreshTokens.push(refreshToken);

  // refreshtoken을 쿠키에 넣기 :  res.cookie(쿠키의 이름 , 쿠키의 값[refreshtoken] , 추가 옵션)
  res.cookie("refreshtoken", refreshToken, {
    httpOnly: true, // xxs공격 방지용 : js를 이용해서 탈취하거나 조작할수 없게 설정
    maxAge: 24 * 60 * 60 * 1000, // 쿠키의 최대 수명
  });

  res.json({ accessToken: accessToken });
});

app.get("/posts", authMiddileware, (req, res) => {
  res.json(posts);
});

function authMiddileware(req, res, next) {
  /* 🟢 토큰을 request header에서 가져오기 */
  //토큰은headers 안에 authorization 안에 들어있다 Bearer ojojojo.oldfwlelfw.ofjwefj 까지 추출
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // 토큰이 없으면 error 발생시
  if (token == null) return res.sendStatus(401);

  /* 🟢 가져온 토큰을 인증하기 : verify ( 토큰 , secretText , (err,user)=>{}) */
  //서버에서 요청에서 같이 온 headers 랑 payload 를 가져오고
  //서버안에 가지고 있는 📝Secret을 이용해서 Signature 부분을 다시 생성합니다.
  //그래서 그 둘이 일치하면 통과가 된다.
  //                                payload 정보는 user에 있다 -> 위에서 로그인할 때 user정보를 넣었으니
  jwt.verify(token, secretText, (err, user) => {
    // 잘못된 토큰이면 error 발생
    if (err) return res.sendStatus(403);
    req.user = user; // 이렇게 user 값을 넣으면 다음 미들웨어에서 user 값을 사용할 수 있다.
    next();
  });
}

/* refresh 토큰으로 access토큰 재발급 */
app.get("/refresh", (req, res) => {
  // body => parsing => req.body
  // cookies => parsing => req.cookies

  // cookie-parser로 coolies 가져오기
  const cookies = req.cookies;

  if (!cookies?.refreshtoken) return sendStatus(403);

  const refreshToken = cookies.refreshtoken;

  // refreshToken이 데이터베이스에 있는 토큰인지 확인
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  // token이 유효한 토큰인지 확인
  jwt.verify(refreshToken, refreshSecretText, (err, user) => {
    if (err) return res.sendStatus(403);

    // accessToken 생성
    const accessToken = jwt.sign({ name: user.name }, secretText, {
      expiresIn: "30s",
    });
    res.json({ accessToken: accessToken });
  });

  console.log("req.cookies : ", req.cookies);
});

const port = 4000;
app.listen(port, () => {
  console.log(`http://localhost:${port} 로 서버 가동`);
});
