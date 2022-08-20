const express = require("express");
const app = express();
const HomeMiddleware = app.use((req, res, next) => {
  console.log("Hello sir! Nice to meet you, this is my first Middleware!");
  next();
});

module.exports = { HomeMiddleware };
