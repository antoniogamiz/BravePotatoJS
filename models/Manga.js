const mongoose = require("mongoose");

const MangaSchema = new mongoose.Schema({
  title: { type: String, require: true },
  url: { type: String, require: true },
  alternativeTitle: { type: String, require: true },
  author: { type: String, require: true },
  portrait: { type: String, require: true },
  status: { type: String, require: true },
  lastUpdated: { type: String, require: true },
  views: { type: String, require: true },
  genres: { type: String, require: true },
  synopsis: { type: String, require: true },
  chaptersList: {
    type: [
      {
        title: String,
        url: String,
        size: Number,
        baseURL: String
      }
    ],
    require: true
  }
});

module.exports = mongoose.model("Manga", MangaSchema);
