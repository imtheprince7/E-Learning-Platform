const mongoose = require('mongoose');

const feedbackschema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    emailid: {
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('feedbacks',feedbackschema);