//register new user
const registerUser = function(user, db) {
  let registerUserQuery = `
  INSERT into users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *
  `;
  const userInput = [user.name, user.email, user.password];
  return db.query(registerUserQuery, userInput)
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

module.exports = { registerUser };
