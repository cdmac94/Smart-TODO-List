//load .env data into process.env
require('dotenv').config();

const request = require('request-promise');

const convert = require('xml-js');

//console.log("string");
//console.log("process.env.WAAPIKEY", process.env.WAAPIKEY);



//checkWolfram(process.argv[2]);

/*
const duckDuckGoApi = (taskString) => {
  const queryString = taskString.split(' ').join('+');
  return request(`https://api.duckduckgo.com/?q=${queryString}&format=json`)
    .then((response) => {
      //const obj = convert.xml2json(response);
      //const JSONobj = JSON.parse(obj);
      //console.log(JSONobj);
      //console.log(JSONobj.elements[0].attributes.datatypes);
      const obj = JSON.parse(response);
      const result = obj.RelatedTopics[0].Text;
      console.log("result:", result);
    }
    )
    .catch((error) => {
      console.log(error);
    });
};

duckDuckGoApi(process.argv[2]);
*/
const categorizeTask = (string) => {
  const task = string.toLowerCase();
  let category = null;
  if (task.includes("nuclearreactor" || "food" || "dish" || "recipe" || "meat" || "vegetable" || "fruit" || "dairy" || "restaurant")) {
    category = "eat";
  } else if (task.includes("movie" || "cinema" || "film" || "Netflix" || "TV" || "Hulu" || "Disney+" || "HBO" || "CBS")) {
    category = "watch";
  } else if (task.includes("read" || "reading" || "book" || "journal" || "novel" || "script" || "Bible" || "poem" || "monologue" || "written")) {
    category = "read";
  } else if (task.includes("buy" || "purchase" || "shop" || "shopping" || "deals" || "sale" || "product" || "retail" || "price" || "Amazon" || "Costco" || "Loblaws" || "Walmart")) {
    category = "buy";
  } else {
    category = null;
  }
  return category;
};

const wolframAlpha = (taskString) => {
  const queryString = taskString.split(' ').join('+');
  return request(`http://api.wolframalpha.com/v2/query?input=${queryString}&appid=${process.env.WAAPIKEY}`)
    .then((response) => {
      const obj = convert.xml2json(response);
      const JSONobj = JSON.parse(obj);
      //console.log("wolfram working", JSONobj.elements[0].attributes.datatypes);
      //console.log("type", typeof JSONobj.elements[0].attributes.datatypes);
      let result = JSONobj.elements[0].attributes.datatypes;
      console.log(categorizeTask(result));
      return result;
    }
    )
    .catch((error) => {
      console.log(error);
    });
};

wolframAlpha(process.argv[2]);


//categorizeTask(wolframAlpha(process.argv[2]));

