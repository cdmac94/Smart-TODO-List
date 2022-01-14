// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const sassMiddleware = require("./lib/sass-middleware");
const cookieSession = require('cookie-session');

//const login = require("./routes/login");
//const logout = require("./routes/logout");
//const edit = require("./routes/edit");
//const userProfile = require"./routes/userProfile");
//const books = require("./routes/books");
/*const getUsers =
equireedit('routes/helpers/user_login')  addItem = require('/routes/addItem');*/

app.use(cookieSession({
  name: 'session',
  keys: ['someValue'],
}));


// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//true or false?
app.use(
  "/styles", sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: true, // false => scss, true => sass
  })
);

// Separated Routes for each Resource
//
const usersRoutes = require("./routes/users");
//
const itemsRoutes = require("./routes/items");
//
const loginRoutes = require("./routes/login");
//
const logoutRoutes = require("./routes/logout");



// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/items", itemsRoutes(db));
app.use('/api/login', loginRoutes(db));
app.use('/api/logout', logoutRoutes(db));
/*
app.use('/edit', edit(db));
app.use('userProfile', userProfile(db));
app.use('/books', books(db)p.use('/getUsers', getUsers(db)););
app.use('/additem', addItem(db));
a*/

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  console.log(req.session.userId);
  const data = { userId: req.session.userId };
  res.render("index", data);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
//port 8080
