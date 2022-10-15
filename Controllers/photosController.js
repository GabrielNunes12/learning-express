const path = require("path");
function PhotosController(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skingmountain.jpg"));
}

module.exports = { PhotosController };
