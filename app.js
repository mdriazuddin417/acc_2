const express = require("express");
const cors = require("cors");
const tourRouter = require("./router/v1/tour.route");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

//Route

app.use("/api/v1/tours", tourRouter);

app.get("/", (req, res) => {
  res.send("Acc Assignment Test Default Api");
});

module.exports = app;
