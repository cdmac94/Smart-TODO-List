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
const getDoneList = require('./helpers/get_completed');
//add new task
const addItem = require('./helpers/add_item');
//update category of existing task
const updateItemCat = require('./helpers/update_item_category');
//delete task
const deleteItem = require('./helpers/delete_item');
//completed/archive task
const completeItem = require('./helpers/complete_item');

module.exports = (db) => {
  //GET - users' tasks (note that we want to present them under different categories)

  // Get all from list
  router.get("/:id/allItems", (req, res) => {
    const userId = req.session.id;
    db.query(`SELECT * FROM items WHERE id = $1;`,[userId])
      .then(data => {
        const items = data.rows;
        res.json({ items });
        res.render('index')
            })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // router.get('/watch', (req, res) => {

  //   const userId = req.session.id;
  //   getWatchList(userId, db)
  //     .then(data =>
  //       res.send(data))
  //     .catch(error => res.send('Error:', error));
  // });

  // router.get('/eat', (req, res) => {

  //   const userId = req.session.id;
  //   getEatList(userId, db)
  //     .then(data =>
  //       res.send(data))
  //     .catch(error => res.send('Error:', error));
  // });

  // router.get('/read', (req, res) => {

  //   const userId = req.session.id;
  //   getReadList(userId, db)
  //     .then(data =>
  //       res.send(data))
  //     .catch(error => res.send('Error:', error));
  // });

  // router.get('/buy', (req, res) => {

  //   const userId = req.session.id;
  //   getBuyList(userId, db)
  //     .then(data =>
  //       res.send(data))
  //     .catch(error => res.send('Error:', error));
  // });

  //GET - to see a user's completed tasks
  router.get('/done', (req, res) => {
    const userId = req.session.id;
    getDoneList(userId, db)
      .then(data =>
        res.send(data))
      .catch(error => res.send('Error:', error));
  });



  //GET - form for adding new task
  router.get("/addtask", (req, res) => {
    //add story after logged in
    res.render("new_task");
  });

  //POST - add new tasks, with this involving the use of categoryDecide
  //ask mentor about this:
  router.post("/addtask", (req, res) => {
    const userId = req.session.userId;
    const userEntry = req.body;
    let category = categoryDecide(userEntry);
    addItem(userId, category, userEntry, db)
      .then(response => {
        res.redirect('/');
      })
      .catch(error => {
        res.send(error);
      });
  });


  //PUT - update task's category
  router.put('/:taskID', (req, res) => {
    const userId = req.session.userId;
    const itemId = req.params.itemId;
    let selectedCategory = req.body;
    updateItemCat(userId, itemId, selectedCategory, db)
      .then(item => {
        res.send(item);
      })
      .catch(error => {
        res.send(error);
      });
  });

  //PUT - archive a completed task
  router.put('/:id/done', (req, res) => {
    const userId = req.session.userId;
    const itemId = req.params.taskID;
    completeItem(userId, itemId, db)
      .then(item => {
        res.send(item);
      })
      .catch(error => {
        res.send(error);
      });
  });

  //delete - delete task
  router.delete('/:taskID', (req, res) => {
    const userId = req.session.userId;
    const itemId = req.params.taskID;
    deleteItem(userId, itemId, db)
      .then(item => {
        res.send(item);
      })
      .catch(error => {
        res.send(error);
      });
  });

  return router;
};

