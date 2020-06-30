const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Olá mundo!");
});

module.exports = router;
