const DDG = require('./DDG_call').checkDuckDuckGoAPI;
const wolframAlpha = require('./wolffram_call').wolframAlphaApi;
const categorize = require('./categorize').categorize;

const categoryDecide = async function(taskString) {

  let output = " ";
  let outputObj = {}
  //console.log("task string:", taskString);
  //categorize
  let simpleRequest = categorize(taskString);
  //console.log("simpleRequest:", simpleRequest);
  //DDGt
  const duckDuckGo = await DDG(taskString)

  // console.log("duckDuckGo", duckDuckGo);
  //wolfWolfram
  let wolfram = await wolframAlpha(taskString)
  //console.log("wolffram:", wolfram);

  if (simpleRequest !== null) {
    // console.log("1");
    output = simpleRequest;
    console.log(output);
  } else if (categorize(duckDuckGo) !== null) {
    // console.log("2");
    output = categorize(duckDuckGo);
    console.log(output);
  } else if (categorize(wolfram) !== null) {
    // console.log("3");
    output = categorize(wolfram);
    console.log(output);
  } else {
    output = "not really sure";
    console.log(output);
  }
  console.log("output:", output);
};

// categoryDecide(process.argv[2]);
