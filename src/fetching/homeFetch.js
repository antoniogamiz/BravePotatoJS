var HTMLParser = require("node-html-parser");
let request = require("request");

const URL = "https://manganelo.com/home";

let content;

request({ uri: URL }, function(error, response, body) {
  content = body;
  const root = HTMLParser.parse(content);
  let latest = root.querySelectorAll(".itemupdate");
});
