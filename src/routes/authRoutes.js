const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log("🚀 ~ file: authRoutes.js:6 ~ router.post ~ req:", req.body);

  res.send("You made a post request");
});

module.exports = router;
