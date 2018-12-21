const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./config/db");

const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

require("./routes")(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

mongoose.connect("mongodb://localhost:27017/testing");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
