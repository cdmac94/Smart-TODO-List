const addItem = function(userID, category, title, db) {

  const date = new Date();

  const addItemQuery = `
    INSERT INTO items (user_id, category_id, title, date_created)
    VALUES ($1, $2, $3, $4) RETURNING *
    `;

  const userInput = [
    userID,
    category,
    title,
    date
  ];

  return db.query(addItemQuery, userInput)
    .then(res => {
      if (res.rows) {
        return res.rows[0];
      } else {
        return null;
      }
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = { addItem };
