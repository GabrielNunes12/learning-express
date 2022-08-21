const user = require("../models/userModel");
function FriendsController(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "Missing request body" });
  }
  res.status(200).send(user.push({ id: user.length, name: req.body.name }));
}

module.exports = { FriendsController };
