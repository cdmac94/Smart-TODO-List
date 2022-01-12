const getReadList = function(userId, db) {

  const query = `
    SELECT *
    FROM items
    WHERE user_id = $1
    AND category_id = 3
    ORDER BY date_created
    `;

  const value = [userId];

  return db.query(query, value)
    .then(res => res.rows)
    .catch(err => {
      console.log(err);
    });
};

module.exports = { getReadList };
