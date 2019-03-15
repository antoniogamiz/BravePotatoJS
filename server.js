const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
