//bonus helper
const completeItem = function(userID, itemID, db) {

  let query = `
    UPDATE items
    SET active = false
    WHERE id = $1
    AND user_id = $2
    RETURNING *`;

  let queryValues = [itemID, userID,];

  return db.query(query, queryValues)
    .then(res => res.rows[0])
    .catch(err => {
      console.log(err);
    });
};

module.exports = { completeItem };
