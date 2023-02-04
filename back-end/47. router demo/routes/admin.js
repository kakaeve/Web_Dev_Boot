const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("어드민이 아니야");
});

router.get("/topsecret", (req, res) => {
  res.send("비밀");
});
router.get("/delete", (req, res) => {
  res.send("삭제");
});

module.exports = router;
