const express = require("express");
const {
  HomeController,
  HomeLogin,
  UserId,
} = require("../Controllers/homeController");
const HomeRouter = express.Router();
HomeRouter.get("/", HomeController);
HomeRouter.post("/login", HomeLogin);
HomeRouter.get("/user/:id", UserId);
module.exports = HomeRouter;
