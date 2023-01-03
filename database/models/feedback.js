const mongoose = require("mongoose");

const main = async () =>{
    mongoose.set('strictQuery', true);
    await mongoose.connect("mongodb://0.0.0.0:27017/e-learning");
    const feedbackmodel = new mongoose.Schema({
    fullname: String,
    emailid: String,
    feedback: String
  });


  const feedb = mongoose.model('feedback',feedbackmodel);
  let data = new feedb({fullname: ' ', emailid:' ', feedback:' '});
  
  let result = await data.save();
  console.log(result);

}

