const Register = require('../database/models/userregistrationmodel');

async function register(req)
{
 const { uname, fname, email,password, cpassword, mobile, city, state, institute } = req.body;  
    let data = new Register({
   username :uname,
   fullname: fname,
   emailid:email,
   password:password,
   confirmpassword: cpassword,
   mobilenumber: mobile,
   city: city,
   state: state,
   instititeName: institute
});
await data.save();    


}

module.exports = register;