const express = require("express");
const HomeRoutes = require("./Routes/HomeRoutes");
const FriendsRoute = require("./Routes/FriendsRoutes");
const { HomeMiddleware } = require("./middleware/index");
const app = express();
app.use(express.json());
//Home router
app.use("/", HomeMiddleware, HomeRoutes);
//friends router
app.use("/friends", FriendsRoute);
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
