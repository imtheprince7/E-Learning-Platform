const { clear } = require("console");
const express = require("express");
const path = require("path");

const app = express();
// setup ejs
app.set("view engine", "ejs");
// path declaration of ejs
app.set("views", path.join(__dirname, "/views"));
//set-up for static serving and using in project
app.use("/", express.static(path.join(__dirname, "static")));

//const conn = require('./database/connection');
app.get("/", (req, resp) => {
  resp.render("index");
});

app.get('/contact', (req, resp) => {
    resp.render("contact");
  });

  app.get('/courses', (req, resp) => {
  resp.render("courses");
});

app.get('/feedback', (req, resp) => {
    resp.render("feedback");
  });

app.get("/login", (req, resp) => {
    resp.render("login");
  });

  app.get("/register", (req, resp) => {
    resp.render("register");
  });
app.listen(4000);
