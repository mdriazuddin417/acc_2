const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Acc Assignment Test Default Api");
});

module.exports = app;
