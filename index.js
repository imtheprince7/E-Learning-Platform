const { clear } = require('console');
const express = require('express');
const path = require('path');

const app = express();
// setup ejs
app.set('view engine','ejs');
// path declaration of ejs
app.set('views', path.join(__dirname, '/views'));
//set-up for static serving and using in project
app.use('/logo', express.static(path.join(__dirname, 'logo')));

const dire = path.join(__dirname,'/public/views');
console.log(dire);
//const conn = require('./database/connection');
app.get('/', (req ,resp)=>{
    resp.render('index');
 });

app.get('/public/views/login', (req, resp)=>{
    resp.render('login')
});

app.get('/public/views/courses.ejs', (req, resp)=>{
    resp.render('courses')
});

app.listen(4000);