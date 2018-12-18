const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

let manga = [];

function save(manga) {
  console.log(`Total number of mangas: ${manga.length}`);
  let json = JSON.stringify(manga, null, 2);
  fs.writeFile("mangas.json", json, "utf8", function(err) {
    if (err) {
      console.log(err);
    }
  });
}

let N = 1;

function getURLs(i) {
  if (i <= N) {
    let url = `https://manganelo.com/manga_list?type=topview&category=all&state=all&page=${i}`;
    request({ uri: url }, function(error, response, body) {
      const $ = cheerio.load(body);
      $(".list-truyen-item-wrap").each((i, e) => {
        manga.push({
          url: $($(e).find("a")).attr("href")
        });
      });

      console.log(`Scraping page (${i}/${N})`);
      getURLs(i + 1);
    });
  } else {
    console.log("Getting URLs finished.");
    console.timeEnd("first-step");
    console.log("Getting manga information...");
    console.time("second-step");
    getMangaInformation(0);
  }
}

let mangasInformation = [];

function getMangaInformation(i) {
  if (i < manga.length) {
    console.log(`Getting manga information (${i}/${manga.length})`);
    let url = manga[i]["url"];
    request({ uri: url }, function(error, response, body) {
      const $ = cheerio.load(body);
      let children = $(".manga-info-text").children();

      // title and alternative ttitles
      let titleAndAlternative = $(children[0])
        .text()
        .split("\n");
      if (!titleAndAlternative[0]) titleAndAlternative.splice(0, 1);

      let chaptersList = [];
      $(".row").each((i, e) => {
        if (i != 0) {
          let current = $(e).children();
          chaptersList.push({
            title: $($(current[0]).children()).text(),
            url: $($(current[0]).children()).attr("href")
          });
        }
      });
      mangasInformation.push({
        title: titleAndAlternative[0],
        url: url,
        alternativeTitle: titleAndAlternative[1].split("Alternative : ")[1],
        author: $(children[1])
          .text()
          .split("Author(s) :\n")[1],
        status: $(children[2])
          .text()
          .split("Status : ")[1],
        lastUpdated: $(children[3])
          .text()
          .split("Last updated : ")[1],
        views: $(children[5])
          .text()
          .split("View : ")[1],
        genres: $(children[6])
          .text()
          .split("Genres :\n")[1]
          .split("\n")[0],
        synopsis: $("#noidungm")
          .text()
          .split("\n")[2],
        chaptersList: chaptersList
      });
      getMangaInformation(i + 1);
    });
  } else {
    console.log("Getting manga information finished.");
    console.timeEnd("second-step");
    save(mangasInformation);
  }
}

/* main */
console.log("Getting URLs...");
console.time("first-step");
getURLs(1);
