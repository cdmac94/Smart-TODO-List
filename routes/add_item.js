// Code to categorize item using google api
//Will return with item.category_id




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
