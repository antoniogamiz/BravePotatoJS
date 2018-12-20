const fs = require("fs");
const axios = require("axios");

let manga = JSON.parse(fs.readFileSync("./mangas.json", "utf8"));

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
    if (response.data.status === "repeated") {
      console.log(
        `Manga with title: ${manga[0].title} is already in the database.`
      );
    } else {
      if (response.data.status === "success") console.log("Manga added.");
    }
  })
  .catch(function(error) {
    console.log(error.error);
  });
