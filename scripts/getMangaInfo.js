const utils = require("../utils");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const syncRequest = require("sync-request");

let secondStep = JSON.parse(
  fs.readFileSync("./scripts/data/secondStep.json", "utf8")
);
let manga = JSON.parse(
  fs.readFileSync("./scripts/data/firstStep.json", "utf8")
);

const getInfo = (url, body) => {
  const $ = cheerio.load(body);
  let children = $(".manga-info-text").children();

  // title and alternative titles
  let titleAndAlternative = $(children[0])
    .text()
    .split("\n");
  if (!titleAndAlternative[0]) titleAndAlternative.splice(0, 1);

  let chaptersList = [];
  $(".row").each((i, e) => {
    if (i !== 0) {
      let current = $(e).children();
      chaptersList.push({
        title: $($(current[0]).children()).text(),
        url: $($(current[0]).children()).attr("href")
      });
    }
  });
  return {
    title: titleAndAlternative[0],
    url: url,
    alternativeTitle: titleAndAlternative[1].split("Alternative : ")[1],
    author: $(children[1])
      .text()
      .split("Author(s) :\n")[1],
    portrait: $($(".manga-info-pic").children()[0]).attr("src"),
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
  };
};

const getChapterInfo = body => {
  const $ = cheerio.load(body);

  let size = $("#vungdoc").children().length;
  let baseURL = $($("#vungdoc").children()[0])
    .attr("src")
    .split(/\/\d+\.jpg/)[0];

  let fakePositives = 0;
  $("#vungdoc")
    .children()
    .each((i, e) => {
      if (!$(e).attr("src")) fakePositives++;
    });
  size -= fakePositives;
  return { size: size, baseURL: baseURL };
};

const getMangaInfo = i => {
  if (i < secondStep.size) {
    process.stdout.write(`Second step: (${i + 1}/${secondStep.size})\r`);
    console.log();
    let url = manga[i]["url"];
    request({ uri: url }, (error, response, body) => {
      let info = getInfo(url, body);
      request(
        {
          url: `http://localhost:3000/api/manga?title=${info.title}`
        },
        (err, response, body) => {
          if (err) console.log(err);
          console.log(`http://localhost:3000/api/manga?title=${info.title}`);
          if (!JSON.parse(response.body).status) {
            for (let j = 0; j < info.chaptersList.length; j++) {
              process.stdout.write(
                `Current chapter: (${j}/${info.chaptersList.length})\r`
              );
              let response = syncRequest("GET", info.chaptersList[j].url);
              let body = response.getBody("utf-8");
              let currentChapterInfo = getChapterInfo(body);
              info.chaptersList[j].size = currentChapterInfo.size;
              info.chaptersList[j].baseURL = currentChapterInfo.baseURL;
            }
            syncRequest("POST", "http://localhost:3000/api/manga", {
              json: { data: info }
            });
            utils.save(
              {
                next: i + 1,
                size: manga.length
              },
              "./scripts/data/secondStep.json"
            );
          }
          getMangaInfo(i + 1);
        }
      );
    });
  }
};

getMangaInfo(secondStep.next);
