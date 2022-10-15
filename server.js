const express = require("express");
const HomeRoutes = require("./Routes/HomeRoutes");
const app = express();
app.use(express.json());
//Home router
app.use("/", HomeRoutes);
//friends router
app.use("/friends", HomeRoutes);
app.use("/photos", HomeRoutes);
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
