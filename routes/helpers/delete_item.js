
//delete specified item/task from database of specified user
const deleteItem = function(usersID, itemsID, db) {
  const deleteItemQuery = 'DELETE FROM items WHERE user_id = $1 AND id = $2';
  const values = [usersID, itemsID];
  return db.query(deleteItemQuery, values)
    .then(results => {
      if (results.rows) {
        return results.rows[0];
      } else {
        return null;
      }
    })
    .catch(err => {
      console.log("error:", err);
    });
};

module.exports = {
  deleteItem
};
