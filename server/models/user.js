const mongoose = require('mongoose');

// Is the schema that we will define
const Schema = mongoose.Schema;


// Let's define our model
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
});


// Lets' create our model class
// It loads the model into a mongodb
const ModelClass = mongoose.model('user', userSchema);


// Lets' export the model

module.exports = ModelClass;
