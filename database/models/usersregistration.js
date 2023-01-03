const mongoose = require("mongoose");

const main = async () =>{
    mongoose.set('strictQuery', true);
    await mongoose.connect(' ');
    const userRegistrationModel = new mongoose.Schema({
    username: String,
    name:String,
    emailid: String,
    mobilenumber : Number,
    city: String,
    state: String,
    instititeName: String
  });

 // const userRegistration = async () =>{
    const users = mongoose.model('registrationdetails',userRegistrationModel);
    let data = new users({userName: ' ', name:' ',emailid:' ',
                mobilenumber:' ',city:' ',state:' ',instititeName:' ' });
                
    let result = await data.save();
    console.log(result);
 
}

 main();
