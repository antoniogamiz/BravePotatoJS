const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  db.url,
  { useNewUrlParser: true },
  (err, database) => {
    if (err) return console.log(err);
    const DB = database.db("testing");
    require("./routes")(app, DB);
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
);
