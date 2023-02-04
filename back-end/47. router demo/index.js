const express = require("express");
const app = express();
const sheltersRouter = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

app.use("/shelters", sheltersRouter);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("3000번 포트 실행중");
});
