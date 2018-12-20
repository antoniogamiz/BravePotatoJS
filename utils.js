const fs = require("fs");

const save = (manga, path) => {
  console.log(`Total number of items: ${manga.length}`);
  let json = JSON.stringify(manga, null, 2);
  fs.writeFile(path, json, "utf8", function(err) {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = { save };
