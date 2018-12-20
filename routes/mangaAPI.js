let ObjectID = require("mongodb").ObjectID;
const Manga = require("../models/Manga");

module.exports = function(app) {
  app.get("/api/manga", (req, res) => {
    const title = req.query.title;
    Manga.findOne({ title: title }, (err, m) => {
      if (err) res.send(err);
      if (!m) res.send({ status: false });
      else res.send({ status: true, data: m });
    });
  });

  app.post("/api/manga", (req, res) => {
    const data = req.body.data;
    Manga.findOne({ title: data.title }, (err, m) => {
      if (err) res.send(err);
      if (!m) {
        const manga = new Manga({
          title: data.title,
          url: data.url,
          alternativeTitle: data.alternativeTitle,
          author: data.author,
          portrait: data.portrait,
          status: data.status,
          lastUpdated: data.lastUpdated,
          views: data.views,
          genres: data.genres,
          synopsis: data.synopsis,
          chaptersList: data.chaptersList
        });

        manga
          .save()
          .then(() => {
            res.send({ status: "success" });
          })
          .catch(err =>
            res.send({ error: "An error has occurred (/api/manga post)" })
          );
      } else {
        res.send({ status: "repeated" });
      }
    });
  });
};
