import get from "axios";
import { load } from "cheerio";

const url = "https://news.ycombinator.com/";

//get via Axios
function getYCDataAxios() {
  get(url)
    .then((response) => {
      const $ = load(response.data);
      const titles = [];
      $(".titleline > a").each((index, element) => {
        titles.push($(element).text());
      });

      console.log("Axios Data begins here...");
      console.log(
        "=============================================================="
      );
      console.log(titles);
    })
    .catch((error) => {
      console.error(error);
    });
}

// get data via fetch
async function getYCData() {
  try {
    // Fetch data from URL and store the response into a const
    const response = await fetch(url);
    // Convert the response into text
    const body = await response.text();

    // Load body data
    const $ = load(body);
    const titles = [];
    $(".titleline > a").each((index, element) => {
      titles.push($(element).text());
    });
    console.log("Fetch Data begins here...");
    console.log(
      "=============================================================="
    );
    console.log(titles);
  } catch (error) {
    console.log(error);
  }
}

getYCData();
getYCDataAxios();
