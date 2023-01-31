const exrpess = require("express");
const app = exrpess();
const morgan = require("morgan");
const AppError = require("./AppError.js");

app.use(morgan("tiny"));
// app.use((req, res, next) => {
//   console.log("first middleware");
//   return next();
//   console.log("first end!");
// });
// app.use((req, res, next) => {
//   console.log("second middleware");
//   return next();
//   console.log("second end");
// });
// app.use((req, res, next) => {
//   console.log("3rd middleware");
//   return next();
// });
const addDate = (req, res, next) => {
  req.requsetTime = Date.now();
  console.log(req.method, req.path);
  next();
};
app.use(addDate);
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chchch") {
    return next();
  }
  //   res.send("비밀번호 틀림!");
  throw new AppError("비밀번호가 필요함!", 401);
};

app.get("/", (req, res) => {
  console.log(`요청 시간 : ${req.requsetTime}`);
  res.send("Home!!");
});

app.get("/error", (req, res) => {
  chicken.fly();
});

app.use("/dogs", (req, res, next) => {
  console.log("강아지♥");
  next();
});

app.get("/dogs", (req, res) => {
  console.log(`요청 시간 : ${req.requsetTime}`);
  res.send("멍멍");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("비밀!");
});

// app.use((err, req, res, next) => {
//   console.log("********************************");
//   console.log("*************ERROR**************");
//   console.log("********************************");
//   //res.status(500).send("에러 발생!!");
//   console.log(err);
//   next(err);
// });

app.get("/admin", (req, res) => {
  throw new AppError("관리자가 아닙니다.", 403);
});
app.use((req, res) => {
  res.status(404).send("페이지를 찾을 수 없습니다.");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "에러!!!" } = err;
  res.status(status).send(message);
});
app.listen(3000, () => {});
