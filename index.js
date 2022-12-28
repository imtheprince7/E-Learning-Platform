const { clear } = require('console');
const express = require('express');
const path = require('path');

const app = express();

// setup
app.set('view engine','ejs');
// path declaration
app.set('views', path.join(__dirname, '/views'));

//const conn = require('./database/connection');
app.get('/', (req ,resp)=>{
    resp.render('index');
 });

app.get('/', (req, resp)=>{
    resp.render('login')
});

app.get('/', (req, resp)=>{
    resp.render('courses')
});

app.listen(4000);