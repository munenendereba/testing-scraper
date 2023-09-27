import get from "axios";
import { load } from "cheerio";

const url = "https://news.ycombinator.com/";
get(url)
  .then((response) => {
    const $ = load(response.data);
    const titles = [];
    $(".titleline > a").each((index, element) => {
      titles.push($(element).text());
    });
    console.log(titles);
  })
  .catch((error) => {
    console.error(error);
  });
