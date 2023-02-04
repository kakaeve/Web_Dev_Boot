const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("모든 개");
});

router.get("/:id", (req, res) => {
  res.send("개 하나");
});
router.get("/:id/edit", (req, res) => {
  res.send("개 수정");
});

module.exports = router;
