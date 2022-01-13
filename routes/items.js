/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

//auto categorize with APIs
const  categoryDecide  = require('../helpers/Finalchoice');
//helper functions
//receive current list
const getBuyList = require('./helpers/get_buy');
const getEatList = require('./helpers/get_eat');
const getReadList = require('./helpers/get_read');
const getWatchList = require('./helpers/get_watch');
//add new task
const addItem = require('./helpers/add_item');
//update category of existing task
const updateItemCat = require('./helpers/update_item_category');
//delete task
const deleteItem = require('./helpers/delete_item');

module.exports = (db) => {
  //GET - users' tasks (note that we want to present them under different categories)

  //POST - add new tasks, with this involving the use of categoryDecide
  router.post.post("/:itemID", (req, res) => {

  });

  //PUT - update task's category
  router.put
  //delete - delete task
  router.delete



  return router;
};

//for completed task, we would need to transfer the specified data(task/item) to another table
//brainstorming: require GET of that specific task, POST it to another table, and then DELETE it out of the current active task?
//alternatively: PUT request -> to switch it from active status to non-active status

/*
module.exports = (db) => {

  router.get("/", (req, res) => {
    let query = `SELECT * FROM widgets`;
    console.log(query);
    db.query(query)
      .then(data => {
        const widgets = data.rows;
        res.json({ widgets });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
*/
