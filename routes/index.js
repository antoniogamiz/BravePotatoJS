var express = require('express');
var router = express.Router();

// TEMPORAL

let populars = new Array(12);

populars.fill( {
  mangaTitle: "One Piece",
  coverPath: "/images/one-piece-cover-page.jpg",
  lastChapter: "Chapter 902",
  url: "#"
}, 0, populars.length );

let manga = new Array(12);

let c = {
  name: "Chapter 34",
  releaseDate: "5 hour ago",
  url: "#"
}

manga.fill( {
  mangaTitle: "Seirei no Moribito",
  coverPath: "/images/mini-cover-page-test.jpg",
  lastChapterList: [c, c, c, c, c],
  url: "#"
}, 0, manga.length);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    mangaCoverPages: populars,
    latestMangaReleases: manga
  });
});

module.exports = router;
