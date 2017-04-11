const User = require ('../models/user');
const jwt = require ('jwt-simple');
const config  = require ("../config");


function tokenForUser(user){
  // sub property -> is the shortcut for subject: who this is token belongs to?
  // so the subject to belongs is the id of one specific user
  // IAT -> Issued at time
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp },config.secret);
}

exports.signup = (req,res,next) => {
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
          res.json({token: tokenForUser(user)});
      });

   });



  // Respond to request
}
