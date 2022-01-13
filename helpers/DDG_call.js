const request = require('request-promise');
const categorize = require('./categorize').categorize

const checkDuckDuckGoAPI = async function(taskString) {
  const queryString = taskString.split(' ').join('+');

  try {
    const response = await request(`https://api.duckduckgo.com/?q=${queryString}&format=json`);
    const obj = JSON.parse(response);
    const result = obj.RelatedTopics[0].Text;
    return result;
  } catch (error) {
    console.log(error);
  }
};





module.exports = { checkDuckDuckGoAPI }
