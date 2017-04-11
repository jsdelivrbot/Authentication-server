const User = require ('../models/user');
exports.signup = (req,res,next) => {

  //res.send({success: 'true'});

   // Everything it contains on the request
   const email = req.body.email;
   const password = req.body.password;

   if (!email || !password) {
    return res.status(422).send({ error: "You must provide with email and password"});
   }

  // See if a user with the given email exists
   User.findOne({email: email}, (error,existingUser)=>{
      if(error) {
          return next(error);
      }

      // If a user with email does exist, return an error
      if(existingUser){
        return res.status(422).send({error: "email is in use"}); // Unprocessable entity
      }

      // If a user with email does NOT exist , create and save user record
      // We created the model
      const user = new User({
        email: email,
        password: password
      });

      // Time to save onto the DB
      user.save((error)=>{
          if(error) {return next(error);}
          //Respond to equest indicating the user was created
          res.json({success: true});
      });

   });



  // Respond to request
}
