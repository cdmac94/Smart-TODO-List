const addItem = function(userId, category, title, db) {

  const date = new Date();

  const addItemQuery = `
    INSERT INTO items (user_id, category_id, title, date_created)
    VALUES ($1, $2, $3, $4) RETURNING *
    `;

  const userInput = [
    userId,
    category,
    title,
    date
  ];

  return db.query(addItemQuery, userInput)
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

module.exports = { addItem };
