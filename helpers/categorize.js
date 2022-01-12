// Code to categorize item using google api
//Will return with item.category_id

//check movie data base
const DDG = require('./DDG-call').checkDuckDuckGoAPI


const categorize = function (userInput) {
  console.log(data);
    const lowerCaseInput = data.toLowerCase();
    let category = null;
    if (
      lowerCaseInput.includes("eat") ||
      lowerCaseInput.includes("food") ||
      lowerCaseInput.includes("dish") ||
      lowerCaseInput.includes("recipe") ||
      lowerCaseInput.includes("meat") ||
      lowerCaseInput.includes("vegetable") ||
      lowerCaseInput.includes("fruit") ||
      lowerCaseInput.includes("dairy") ||
      lowerCaseInput.includes('cuisine')
    ) {
      category = "eat";
    } else if (
      lowerCaseInput.includes("watch") ||
      lowerCaseInput.includes("movie") ||
      lowerCaseInput.includes("film") ||
      lowerCaseInput.includes("tv")
    ) {
      category = "watch";
    } else if (
      lowerCaseInput.includes("read") ||
      lowerCaseInput.includes("book") ||
      lowerCaseInput.includes("journal") ||
      lowerCaseInput.includes('novel') ||
      lowerCaseInput.includes('textbooks')
    ) {
      category = "read";
    } else if (
      lowerCaseInput.includes("buy") ||
      lowerCaseInput.includes("store") ||
      lowerCaseInput.includes("retail") ||
      lowerCaseInput.includes("grocer") ||
      lowerCaseInput.includes("purchase")
    ) {
      category = "buy";
    }
    console.log(category)
};

categorize('Bao')


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */

const addItem = function(item) {

  const addItemQuery = `
    INSERT INTO items (user_id, category_id, title, date_created, active)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;

  const userInput = [
    item.user_id,
    item.category_id,
    item.title,
    item.date_created,
    item.active,
  ];

  return pool
    .query(addItemQuery, userInput)
    .then(results => {
      if (results.rows) {
        return results.rows[0];
      } else {
        return null;
      }
    })
    .catch(err => {
      console.log(err);
    });
};

exports.addItem = addItem;
