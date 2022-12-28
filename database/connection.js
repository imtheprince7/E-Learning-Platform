const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:<admin>@projectcodemaster.00dkvg6.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(()=>{
    console.log(`connection SuccessFull`);
  }).catch((e)=>{
    console.log(`no connection: ${e}`);
  })
