const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));

app.get("/greet", (req, res) => {
  const { name = "no-name" } = req.cookies;
  res.send(`안녕 ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "정수");
  res.cookie("animal", "dog");
  res.send("쿠키를 보냈습니다.");
});

app.get("/getsigncookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("쿠키 사인 완료");
});

app.get("/verifyfruit", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {});
