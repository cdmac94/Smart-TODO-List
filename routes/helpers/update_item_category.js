//update item category
const updateItemCat = function(userID, itemID, categoryID, db) {
  let query = `
    UPDATE items
    SET category = $3
    WHERE id = $1
    AND user_id = $2
    RETURNING *`;

  let queryValues = [itemID, userID, categoryID];

  return db.query(query, queryValues)
    .then(res => res.rows[0])
    .catch(err => {
      console.log(err);
    });
};

module.exports = { updateItemCat };

