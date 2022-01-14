//Will return with item.category_id


const categorize = function (input) {

  // console.log("input:", input)
  if (typeof input !== "string"){
    input = input.toString();
  }
  const lowerCaseInput = input.toLowerCase();

  const eat = ["eat", "food", "dish", "recipe", "meat", "vegetable", "fruit", "dairy", "cuisine"];
  const watch = ["watch", "movie", "film", "tv", "series"];
  const read = ["read", "book", "journal", "novel", "textbooks"];
  const buy = ["buy", "store", "retail", "grocer", "purchase"];

  let category = null;

  for (let labels in eat) {
    if (lowerCaseInput.includes(eat[labels])){
      category = "eat";
    };
  };

  for (let labels in watch) {
    if (lowerCaseInput.includes(watch[labels])) {
      category = "watch";
    }
  };

  for (let labels in read) {
    if (lowerCaseInput.includes(read[labels])) {
      category = "read";
    }
  };

  for (let labels in buy) {
    if (lowerCaseInput.includes(buy[labels])) {
      category = "watch";
    }
  };
  // console.log("cat:", category);
  return category;
};

// categorize(process.argv[2]);

module.exports = { categorize };
