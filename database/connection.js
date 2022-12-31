const mongoose = require("mongoose");
mongoose.connect('mongodb://0.0.0.0:27017/code-master');

 
   const {MongoClient} = require('mongodb');
   const url ='mongodb://0.0.0.0:27017/code-master';
   const database = 'code-master';
   const client = new MongoClient(url);
   
   async function dbConnection()
   {
       let result = await client.connect();
       let db = result.db(database);
       return db.collection('usersdetails');
   }
   
   
   // dbConnection();
   
   module.exports = dbConnection;