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
userSchema.pre('save', (next)=>{
  const user = this;
  bcrypt.genSalt(10, (err,salt)=>{
    if(err) {return next(err);}
    bcrypt.hash(user.password, salt, null, (err,hash)=>{
      if(err) {return next(err);}

      user.password = hash;
      next();
    });
  });
});

// Lets' create our model class
// It loads the model into a mongodb
const ModelClass = mongoose.model('user', userSchema);


// Lets' export the model

module.exports = ModelClass;
