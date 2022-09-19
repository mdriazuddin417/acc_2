const app = require("./app");

const express = require("express");
const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log("Test server Port", port);
});
