// Code to categorize item using google api
//Will return with item.category_id

//check movie data base

const axios = require("axios").default;


const categorize = function (userInput) {
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {s: userInput, r: 'json', page: '1'},
    headers: {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': '65d46fecb8msh6f2a611a7f6519fp153fbfjsne359fb8aa45a'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}


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
