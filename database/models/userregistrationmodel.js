const mongoose = require('mongoose');

const userRegistrationSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    emailid: {
        type:String,
        require:true
    },
    mobilenumber : {
        type:Number,
        require:true
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
});

module.exports = mongoose.model('usersregistration',userRegistrationSchema);