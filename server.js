const app = require("./app");
const mongoose = require("mongoose");
const express = require("express");
const port = process.env.PORT || 8081;

mongoose
  .connect(process.env.MONGODB_LOCAL_DATABASE)
  .then(() => {
    console.log("Mongoose Database connected");
  })
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("Test server Port", port);
});
