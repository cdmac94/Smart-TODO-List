const express =  require('express');
const router = express.Router();




const books = (db) => {
  router.post("/", (req, res) => {
    bookSummary(req.body.reminder)
    db.query(`SELECT * FROM items;`)
    .then((response) => {
      res.json(response.rows);

    });
  })

  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM posts WHERE id = $1;', [req.params.id])
    .then((response) => {
      res.json(response.rows[0]);
    })
  })

  return router;

}

module.exports = books;
