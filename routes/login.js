const express = require('express');
const router  = express.Router();


const login = (db) => {
  // GET /login
  router.get ('/', (req, res) => {
    console.log("login successful")
    db.query('SELECT * FROM users;')
    .then((response) => {

      res.json(response.rows);

    });
   
  });

  //GEt/login/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
    .then((response) => {
      res.json(response.rows[0]);
    })
  })

  return router;

}

module.exports = login;