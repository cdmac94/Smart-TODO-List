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
    res.redirect('/');
  });

  //GEt/login/:id
  router.get('/:id', (req, res) => {
    req.session.user_id = req.params.id;
    res
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
      .then((response) => {
        res.json(response.rows[0]);
      })
  })


  return router;
};
