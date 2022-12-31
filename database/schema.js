const mongoose = require("mongoose");

const main = async () =>{
    mongoose.set('strictQuery', true);
    await mongoose.connect("mongodb://0.0.0.0:27017/code-master");
    const userSignUpModel = new mongoose.Schema({
    userName: String,
    name:String
    // emailId: String,
    // mobileNumber : Number,
    // city: String,
    // state: String,
    // instititeName: String
  });

 // const userRegistration = async () =>{
    const users = mongoose.model('users',userSignUpModel);
    let data = new users({userName: 'princeks887', name:'prince Kumar singh'});
    console.log("Geetting user");
    let result = await data.save();
    console.log(result);
 
}

 main();
