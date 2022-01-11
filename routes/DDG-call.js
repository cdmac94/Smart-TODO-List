const request = require('request-promise');

const checkDuckDuckGoAPI = (taskString) => {
  const queryString = taskString.split(' ').join('+');
  return request(`https://api.duckduckgo.com/?q=${queryString}&format=json`)
  .then((response) => {
    const obj = JSON.parse(response);
    // console.log("object", obj);
    const result = obj.RelatedTopics[0].Text;
    console.log("result:", result)
    if (result.includes("food") || result.includes("cuisine") || result.includes("meat") || result.includes("vegetable") || result.includes("fruit")){
      console.log("eat");
    } else if (result.includes("film") || result.includes("series") || result.includes("actor") || result.includes("actress")) {
      console.log("watch");
    } else if (result.includes("book") || result.includes("novel") || result.includes("written")) {
      console.log("read");
    } else {
      console.log("buy");
    }
  })
  .catch((error) => {
    console.log(error);
  });
};

checkDuckDuckGoAPI(process.argv[2])




module.exports = { checkDuckDuckGoAPI }
