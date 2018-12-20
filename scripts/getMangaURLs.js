const utils = require("../utils");
const request = require("request");
const cheerio = require("cheerio");

const N = 901;

let firstStep = [];
const getMangaURLs = i => {
  if (i <= N) {
    let url = `https://manganelo.com/manga_list?type=topview&category=all&state=all&page=${i}`;
    request({ uri: url }, function(error, response, body) {
      const $ = cheerio.load(body);
      $(".list-truyen-item-wrap").each((i, e) => {
        firstStep.push({
          url: $($(e).find("a")).attr("href")
        });
      });
      process.stdout.write(`Scraping page (${i}/${N})\r`);
      getMangaURLs(i + 1);
    });
  } else {
    console.log("Getting URLs finished.");
    utils.save(firstStep, "./data/firstStep.json");
    utils.save(
      {
        next: 0,
        size: firstStep.length
      },
      "./data/secondStep.json"
    );
  }
};

getMangaURLs(1);
