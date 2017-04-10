const User = require ('../models/user');
exports.signup = (req,res,next) => {

  //res.send({success: 'true'});

   // Everything it contains on the request
   const email = req.body.email;
   const password = req.body.password;
  // See if a user with the given email exists
   User.findOne({email: email}, (error,existingUser)=>{

   });

  // If a user with email does exist, return an error

  // If a user with email does NOT exist , create and save user record

  // Respond to request
}
