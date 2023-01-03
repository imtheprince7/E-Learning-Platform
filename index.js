const express = require("express");
const path = require("path");
const database = require('./database/connection');

const app = express();
// setup ejs
app.set("view engine", "ejs");
// path declaration of ejs
app.set("views", path.join(__dirname, "/views"));
//set-up for static serving and using in project
app.use("/", express.static(path.join(__dirname, "static")));

//  to pase body data
app.use(express.urlencoded({ extended : true }));

const FeedBack = require('./database/models/feedbackmodel');


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
  
  
  app.post('/feedback', async (req, res) => {    
    // body data
    const { fname, email,feedback } = req.body;  
    
    let data = new FeedBack({
      fullname:fname,
      emailid:email,
      comment: feedback
    });
    await data.save();    
    res.render("feedback");

  });

app.get("/login", (req, resp) => {
    resp.render("login");
  });

  app.get("/register", (req, resp) => {
    resp.render("register");
  });
app.listen(4000);
