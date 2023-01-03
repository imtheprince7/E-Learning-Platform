const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:admin@cluster0.svzsuz5.mongodb.net/?retryWrites=true&w=majority');

 
   const {MongoClient} = require('mongodb');
   const url ='mongodb+srv://admin:admin@cluster0.svzsuz5.mongodb.net/?retryWrites=true&w=majority';
   const database = 'e-learning';
   const client = new MongoClient(url);
   
   async function dbConnection()
   {
       let result = await client.connect();
       let db = result.db(database);
       return db.collection('feedback');
   }
   
   
   // dbConnection();
   
   module.exports = dbConnection;