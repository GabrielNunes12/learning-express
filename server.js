const express = require("express");
const HomeRoutes = require("./Routes/HomeRoutes");
const app = express();
app.use(express.json());
//Home router
app.use("/", HomeRoutes);
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
