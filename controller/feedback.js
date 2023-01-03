const Feedback = require('../database/models/feedbackmodel');

async function feedback(req){
    const { fname, email,feedback } = req.body; 

    let data = new Feedback({
      fullname:fname,
      emailid:email,
      comment: feedback
    });
   await data.save();    
}

module.exports = feedback;
