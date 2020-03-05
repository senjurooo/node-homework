const express = require("express");
const path = require("path");


// INIT APP
const app = express();

// load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// MOMENT JS
app.locals.moment = require('moment');

// ACCESS TO THE IMAGES
app.use(express.static("views/images"));

// home route
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/career", function (req, res) {
  res.render("career");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

// ACCESS TO THE VIEWS FOLDER
app.locals.basedir = path.join(__dirname, "views");


// ERROR 404
app.use(function (req, res, next) {
  res.status(404);
  res.send("404: File Not Found");
});

// start server
// app.listen(3000, function () {
//   console.log("local host 3000 is working...");
// });

app.listen(process.env.PORT || 8080, () => console.log('Server is running'));