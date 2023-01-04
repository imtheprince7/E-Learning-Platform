const mongoose = require('mongoose');

const feedbackschema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        require:[true, "Please Enter Full Name"],
        maxlength: 32 
    },
    emailid: {
        type:String,
        trim:true,
        require:[true, "Email Id required"],
        unique:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Enter valid Email Id"
        ]
        
    },
    comment:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('feedbacks',feedbackschema);