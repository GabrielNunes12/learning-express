const { DateFormatter } = require("../utils/index.js");

const HomeController = (req, res, next) => {
  res.send("Hi, welcome back sir!");
};

//post method /login
const HomeLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username && !password) return;
  res.send({
    username,
    password,
    loggedIn: DateFormatter(new Date()),
  });
};

module.exports = { HomeController, HomeLogin };
