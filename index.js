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
const Register = require('./database/models/userregistrationmodel');


const register = require('./controller/register');
const feedback = require('./controller/feedback');

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
  app.get("/register", (req, resp) => {
    resp.render("register");
  });

// savind userData into DB calling Controller method & rendering page of Feedback && UserRegistration  
  app.post('/feedback', async (req, res) => {    
    feedback(req);   
    res.render("feedback");
  });  

  app.post('/register', async (req, res)=>{
    register(req)
    res.render("register");
  });


  app.get("/login", (req, resp) => {
    resp.render("login");
  });

app.listen(4000);
