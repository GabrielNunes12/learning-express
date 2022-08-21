const express = require("express");
const { FriendsController } = require("../Controllers/friendsController");
const FriendsRoute = express.Router();
FriendsRoute.post("/friends", FriendsController);
module.exports = FriendsRoute;
