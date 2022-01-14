/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const addUser = require('./helpers/user_register');
const updateUser = require('./helpers/user_update');

module.exports = (db) => {

  //GET info of current users
  router.get("/", (req, res) => {
    const userId = req.session.userId;
    db.query(`SELECT * FROM users WHERE id = $1;`, [userId])
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
  router.get("/newUser", (req, res) => {

    res.render('register');
  });


  router.post("/newUser", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    addUser(user, db)
      .then(user => {
        //req.session.userId = user.id;
        res.render('register');
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


  router.get("/me", (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.send({ message: "not logged in" });
      return;
    }
    db.getUserWithId(userId)
      .then(user => {
        if (!user) {
          res.send({ error: "no user with that id" });
          return;
        } res.send({ user: { name: user.name, email: user.email, id: userId } });
      })
      .catch(e => res.send(e));
  });
  return router;
};




