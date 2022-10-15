const express = require("express");
const {
  HomeController,
  HomeLogin,
  UserId,
} = require("../Controllers/homeController");
const { FriendsController } = require("../Controllers/friendsController");
const { PhotosController } = require("../Controllers/PhotosController");
const HomeRouter = express.Router();
HomeRouter.get("/", HomeController);
HomeRouter.post("/login", HomeLogin);
HomeRouter.get("/user/:id", UserId);
HomeRouter.post("/friends", FriendsController);
HomeRouter.get("/photos", PhotosController);
module.exports = HomeRouter;
