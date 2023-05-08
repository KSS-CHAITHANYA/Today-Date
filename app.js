const express = require("express");
const app = express();

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`${date}`);
});

module.exports = app;
