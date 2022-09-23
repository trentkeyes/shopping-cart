const axios = require('axios');
const cheerio = require('cheerio');
const ObjectsToCsv = require('objects-to-csv');

async function pingWebsite() {
  const response = await axios(
    'https://www.footballdiehards.com/fantasyfootball/dailygames/FanDuel-Salary-data.cfm'
  );
  console.log(response.status);
}

pingWebsite();

let html;

useEffect(() => {
  async function fetchData() {
    const response = await axios(
      'https://www.footballdiehards.com/fantasyfootball/dailygames/FanDuel-Salary-data.cfm'
    );
    html = await response.data;
    console.log(html.substring(20400));

    console.log(html.search('table width="100%'));
    // elements = parse(html);
    // console.log(elements);
  }
  fetchData();
}, []);