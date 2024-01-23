const express = require("express");
const mainRouter = express.Router();
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../middleware/auth");

mainRouter.get("/", checkAuthenticated, (req, res) => {
  res.render("index");
});

/* 😄 로그인 */
mainRouter.get("/login", checkNotAuthenticated, (req, res) => {
  console.log("로그인 상태 : ", req.isAuthenticated());
  res.render("login");
});

/* 😄 회원 가입 */
mainRouter.get("/signup", checkNotAuthenticated, (req, res) => {
  res.render("signup");
});

module.exports = mainRouter;
