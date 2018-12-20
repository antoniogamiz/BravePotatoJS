let ObjectID = require("mongodb").ObjectID;
const Manga = require("../models/Manga");

module.exports = function(app) {
  // app.get("/notes/:id", (req, res) => {
  //   const id = req.params.id;
  //   const details = { _id: new ObjectID(id) };
  //   db.collection("notes").findOne(details, (err, item) => {
  //     if (err) {
  //       res.send({ error: "An error has occured (2)" });
  //     } else {
  //       res.send(item);
  //     }
  //   });
  // });

  app.post("/api/manga", (req, res) => {
    const data = req.body.data;
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
        // res.json(manga);
        // console.log("ddd");
        res.send({ error: "An error has occurred (/api/manga post)" });
      })
      .catch(err =>
        res.send({ error: "An error has occurred (/api/manga post)" })
      );
  });
};
