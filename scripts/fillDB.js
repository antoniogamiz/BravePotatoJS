const fs = require("fs");
const axios = require("axios");

var manga = JSON.parse(fs.readFileSync("./mangas.json", "utf8"));

axios
  .post(
    "http://localhost:3000/api/manga",
    {
      data: manga[0]
    },
    {
      headers: { "Content-Type": "application/json" }
    }
  )
  .then(function(response) {
    console.log(response.data.error);
  })
  .catch(function(error) {
    console.log(error.error);
  });
