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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {mangaCoverPage: populars} );
});

module.exports = router;
