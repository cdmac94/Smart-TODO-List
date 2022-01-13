/*
 * All routes for logout are defined here
 * Since this file is loaded in server.js into api/logout.
 *   these routes are mounted onto /logout
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();


module.exports = () => {
  router.post('/', (req, res) => {
    delete req.session.user_id;
    return res.redirect('/');
  });
  return router;
};
