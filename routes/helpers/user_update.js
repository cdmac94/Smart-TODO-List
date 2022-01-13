//update users
const updateUser = function(user_id, input, db) {

  let queryValues = [];
  let valuesToUpdate = ['name', 'email', 'password'];
  let query = `UPDATE users`;

  //sort through whichinput is being updated
  for (let vals in valuesToUpdate) {
    if (input[vals]) {
      queryValues.push(input);
      if (queryValues < 1)
        query += `SET ${vals} = $${queryValues.length}`;
    } else {
      query += `${vals} = $${queryValues.length}`;
    }
  }

  queryValues.push(user_id);
  query += `WHERE id = $${queryValues.length};`;

  return db.query(query, queryValues)
    .then(res => res.rows)
    .catch(err => {
      console.log(err);
    });
};

module.exports = { updateUser };
