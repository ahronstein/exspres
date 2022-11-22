const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("./pages.html", { root: "public" });
});
router.get("/sports", (req, res) => {
  res.sendFile("./sports.html", { root: "public/pages" });
});
router.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: "public/pages" });
});

module.exports = router;
