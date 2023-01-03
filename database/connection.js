const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:admin@cluster0.svzsuz5.mongodb.net/e-learning?retryWrites=true&w=majority').then((res) => {
    
}); 
  
const {MongoClient} = require('mongodb');
   const url ='mongodb+srv://admin:admin@cluster0.svzsuz5.mongodb.net/e-learning?retryWrites=true&w=majority';
   const database = 'e-learning';
   const client = new MongoClient(url);
   
   async function dbConnection()
   {
       let result = await client.connect();
       let db = result.db(database);
   }
   
   
   // dbConnection();
   
   module.exports = dbConnection;