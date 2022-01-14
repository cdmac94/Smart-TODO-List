/*
 * All routes for login are defined here
 * Since this file is loaded in server.js into api/login.
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const userLogin = require('./helpers/user_login');

module.exports = (db) => {
  // GET /login
  router.get('/', (req, res) => {
    res.render('login');
  });

  //use info filled within the form to perform the login function for the specified user

  router.post('/', (req, res) => {
    const { email, password } = req.body;
    userLogin(email, password, db)
      .then(user => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send({ id: user.id, name: user.name, email: user.email });
      })
      .catch(error => res.send(error));
  });

  return router;
};
