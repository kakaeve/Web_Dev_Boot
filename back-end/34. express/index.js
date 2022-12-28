const express = require("express");
const app = express();
console.dir(app);

// app.use((req, res) => {
//   console.log("new request");
//   //res.send("yes, response");
//   res.send("<h1>this is my web</h1>");
// });

app.get("/", (req, res) => {
  res.send('<input type="text"/>');
});

app.post("cats", (req, res) => {
  res.send("this is Post!!!");
});

app.get("/cats", (req, res) => {
  console.log("cat");
  res.send("<h1>Meow</h1>");
});

app.get("/dogs", (req, res) => {
  console.log("dog");
  res.send("<h1>Woof</h1>");
});
app.get("*", (req, res) => {
  res.send(`I don't know`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
