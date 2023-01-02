const express = require("express");
const app = express();
console.dir(app);

// app.use((req, res) => {
//   console.log("new request");
//   //res.send("yes, response");
//   res.send("<h1>this is my web</h1>");
// });

app.get("/", (req, res) => {
  res.send("<h1>안녕하세요!</h1>");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit}</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  console.log(req.params);
  const { subreddit, postId } = req.params;
  //res.send(`<h1>Browsing the ${subreddit}</h1>`);
  res.send(`<h1>Viewing Post ID :  ${postId}</h1>`);
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
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("찾을 수 없어요.");
  }
  res.send(`<h1> ${q}를 찾으셨나요?</h1>`);
});

app.get("*", (req, res) => {
  res.send(`I don't know`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
