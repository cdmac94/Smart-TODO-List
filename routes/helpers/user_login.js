//no cookies involved
//not sure how to go about this.
/*const user = findUserByEmail(email, users);
const findUserByEmail = (email, database) => {
  for (const property in database) {
    const user = database[property];
    if (user.email === email) {
      return user;
    }
  }
  return null;
}; */


const userLogin = function (email, password, db) {

  const userLoginQuery = `SELECT FROM users WHERE email = $1 AND password = $2`;
  const value = [email, password];

  return db.query(userLoginQuery, value)
    .then(res => res.rows[0])
    .catch(err => {
      console.log(err);
    });
};

module.exports = { userLogin };
