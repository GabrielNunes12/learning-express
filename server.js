const express = require("express");
const HomeRoutes = require("./Routes/HomeRoutes");
const { HomeMiddleware } = require("./middleware/index");
const app = express();
app.use(express.json());
//Home router
app.use("/", HomeMiddleware, HomeRoutes);
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
