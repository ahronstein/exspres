const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("./files.html", { root: "public" });
});
router.get("/shops", (req, res) => {
  res.sendFile("./shops.txt", { root: "public/files" });
});
router.get("/people", (req, res) => {
  res.sendFile("./people.txt", { root: "public/files" });
});

module.exports = router;
