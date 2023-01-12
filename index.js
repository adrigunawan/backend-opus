const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const app = express();
// const router = require("./router");

app.all("/login", (req, res) => {
  console.log("Just got a request!");
  res.send("Halaman Login");
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("Listen on port ", port));
