/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const addUser = require('./helpers/user_register');
const updateUser = require('./helpers/user_update');

module.exports = (db) => {

  //GET info of current users
  router.get("/", (req, res) => {
    const userId = req.session.userId;
    db.query(`SELECT * FROM users WHERE id = $1;`,[userId])
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //registering user
  router.post("/addUser", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    addUser(user, db)
      .then(user => {
        //req.session.userId = user.id;
        res.send(user);
      })
      .catch(error =>
        res.send("Error:", error));
  });

  //PUT or POST?
  router.post("/:id/updateUser", (req, res) => {
    const input = req.body;
    const userId = req.params.id;

    updateUser(userId, input, db)
      .then(user => {
        //req.session.userId = user.id;
        res.send(user);
      })
      .catch(error =>
        res.send("Error:", error));

  });

  return router;
};




