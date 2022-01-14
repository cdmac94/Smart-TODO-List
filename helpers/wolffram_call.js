require('dotenv').config();
const request = require('request-promise');
const convert = require('xml-js');
const categorize = require('./categorize').categorize;

const wolframAlphaApi = async (taskString) => {
  const queryString = taskString.split(' ').join('+');
  // console.log(queryString);
  try {
    const response = await request(`http://api.wolframalpha.com/v2/query?input=${queryString}&appid=${process.env.WAAPIKEY}`)
    const obj = convert.xml2json(response);
    const JSONobj = JSON.parse(obj);
    let result = JSONobj.elements[0].attributes.datatypes;

    let output = categorize(result);

  return output;
  } catch (error) {
    console.error(error);
  }
};


module.exports = { wolframAlphaApi };
