const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const userRegistrationSchema = new mongoose.Schema({
    username: {
        type:String,
        trim:true,
        require:[true, "UserName required"],
        maxlength: 15
    },
    fullname:{
        type:String,
        trim:true,
        require:[true, "Name required"],
        maxlength: 25
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
    password: {
        type:String,
        trim:true,
        require:[true, "Password required"],
       minlength:['6', "Passowrd must be atleast six(6) charachter"],
        match:[
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
            'password atleast contain 1 upperLetter, 1 lowerletter, 1 number and Special character'
        ]
    },
    confirmpassword: {
        type:String,
        trim:true,
        require:[true, "Password required"],
       minlength:['6', "Passowrd must be atleast six(6) charachter"],
        match:[
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
            'password atleast contain 1 upperLetter, 1 lowerletter, 1 number and Special character'
        ]
    },
    mobilenumber : {
        type:Number,
        require:true,
        maxlength:['10'],
        minlenght:['10']
    },
    city: {
        type:String,
        require:true
    },
    state: {
        type:String,
        require:true
    },
    instititeName: {
        type:String,
        require:true
    }
}, {timestamps:true} );


// Encrypting password before saving:

module.exports = mongoose.model('registrationdetails',userRegistrationSchema);