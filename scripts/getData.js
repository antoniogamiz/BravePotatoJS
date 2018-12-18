const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

let manga = [];

function getNamesAndURLs(i) {
  let url = `https://manganelo.com/manga_list?type=topview&category=all&state=all&page=${i}`;
  // eslint-disable-next-line no-loop-func
  request({ uri: url }, function(error, response, body) {
    const $ = cheerio.load(body);
    $(".list-truyen-item-wrap").each((i, e) => {
      manga.push({
        title: $($(e).find("a")).attr("title"),
        url: $($(e).find("a")).attr("href")
      });
    });

    if (i <= 901) {
      console.log(`Scraping page ${i}`);
      getNamesAndURLs(i + 1);
    } else {
      console.timeEnd("Getting 21621 data structure");
      console.log(manga.length);
      let json = JSON.stringify(manga, null, 2);
      fs.writeFile("mangas.json", json, "utf8", function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

console.time("Getting 21621 data structure");
getNamesAndURLs(1);
