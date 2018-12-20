const manga = require("./mangaAPI");

module.exports = (app, db) => {
  manga(app, db);
};
