const { DateFormatter } = require("../utils/index.js");

const HomeController = (req, res, next) => {
  res.send("Hi, welcome back sir!");
};

//post method /login
const HomeLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username && !password)
    return res
      .status(400)
      .json({ error: "password and username does not match" });
  res.send({
    username,
    password,
    loggedIn: DateFormatter(new Date()),
  });
};

//getting the userId through params
const UserId = (req, res, next) => {
  const { id } = req.params;
  const { username, password } = req.body;
  if (!id && !username && !password)
    return res.status(404).json({ error: "User not found" });
  res.json({
    user: username,
    pass: password,
    id,
  });
};

module.exports = { HomeController, HomeLogin, UserId };
