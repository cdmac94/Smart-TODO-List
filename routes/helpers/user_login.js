const bcrypt = require('bcrypt');

const userLogin = function(email, password, db) {
  const userLoginQuery = `SELECT * FROM users WHERE email = $1`;
  const value = [email || 'null'];
  return db.query(userLoginQuery, value)
    .then(res => res.rows[0])
    .then(res => {
      if (password === res.password && res !== undefined) {
        return res;
      }
      return null;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = { userLogin };
