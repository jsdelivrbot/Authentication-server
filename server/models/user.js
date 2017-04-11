const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
// Is the schema that we will define
const Schema = mongoose.Schema;


// Let's define our model
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', (next)=>{
  // get access to the user model
  const user = this;

  // Generate a salt, then run a callback
  bcrypt.genSalt(10, (err,salt)=>{
    if(err) {return next(err);}

    // Hash our password using the salt
    bcrypt.hash(user.password, salt, null, (err,hash)=>{
      if(err) {return next(err);}

      // Just overwrite plaun text password with encrypted password
      user.password = hash;
      // just go ahead and continue with save
      next();
    });

  });

});

// Lets' create our model class
// It loads the model into a mongodb
const ModelClass = mongoose.model('user', userSchema);


// Lets' export the model

module.exports = ModelClass;
