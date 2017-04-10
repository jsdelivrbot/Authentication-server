const mongoose = require('mongoose');
// Is the schema that we will define
const Schema = mongoose.Schema;


// Let's define our model
const userSchema = new Schema({
  email: String,
  password: String
});


// Lets' create our model class



// Lets' export the model
