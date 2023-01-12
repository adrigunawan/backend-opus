"use strict";
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  console.log("Just got a request!");
  res.send("Halaman Login");
});
router.get("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Halaman Homepage");
});
router.get("/register", (req, res) => {
  console.log("Just got a request!");
  res.send("Halaman Register");
});

module.exports = router;
