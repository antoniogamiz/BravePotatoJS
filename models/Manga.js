const mongoose = require("mongoose");

const MangaSchema = new mongoose.Schema({
  title: { type: String, default: "Not found." },
  url: { type: String, default: "Not found." },
  alternativeTitle: { type: String, default: "Not found." },
  author: { type: String, default: "Not found." },
  portrait: { type: String, default: "Not found." },
  status: { type: String, default: "Not found." },
  lastUpdated: { type: String, default: "Not found." },
  views: { type: String, default: "Not found." },
  genres: { type: String, default: "Not found." },
  synopsis: { type: String, default: "Not found." },
  chaptersList: {
    type: [
      {
        title: String,
        url: String,
        size: Number,
        baseURL: String
      }
    ],
    default: []
  }
});

module.exports = mongoose.model("Manga", MangaSchema);
