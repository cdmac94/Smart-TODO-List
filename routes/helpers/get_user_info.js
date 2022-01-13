const getUserWithId = function(id) {
  const query = `SELECT *
  FROM users
  WHERE id = $1`
  const value = [id || 'null']
  return db.query(query, value)
  .then (res => res.rows[0])
  .catch(err => console.error('query error', err.stack));
};

exports.getUserWithId = getUserWithId;

