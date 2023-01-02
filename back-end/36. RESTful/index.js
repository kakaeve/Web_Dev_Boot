const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

// GET - comments - list all comments
// POST - comments - Create a new comments
// GET - comments/:id - Get one comment (using ID)
// PATCH -comments:id - Update one comment
// DELETE -commments/:id - Destroy one comment
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

let comments = [
  { id: uuid(), username: "Todd", comment: "Hi " },
  { id: uuid(), username: "Tom", comment: "There" },
  { id: uuid(), username: "John", comment: "bye " },
  { id: uuid(), username: "kiki", comment: "Hi " },
  { id: uuid(), username: "row", comment: "Hi hgh hv " },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET send");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Post ${qty} & ${meat}`);
});

app.listen(3000, () => {
  console.log(`3000!`);
});
