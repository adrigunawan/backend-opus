"use strict";
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  console.log("Just got a request!");
  res.json({ status: 200, message: "OK", data: { title: "Login", description: "Halaman login..." } });
});
router.get("/", (req, res) => {
  console.log("Just got a request!");
  res.send({ status: 200, message: "OK", data: { title: "Homepage", description: "Halaman homepage" } });
});
router.post("/register", (req, res) => {
  console.log("Just got a request!");
  res.send({ status: 200, message: "OK", data: { title: "Register", description: "Halaman Register" } });
});

module.exports = router;
