const express = require("express");
const { HomeController, HomeLogin } = require("../Controllers/homeController");
const HomeRouter = express.Router();
HomeRouter.get("/", HomeController);
HomeRouter.post("/login", HomeLogin);
module.exports = HomeRouter;
