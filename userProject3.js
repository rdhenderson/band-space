// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var UserSchema = new Schema({
  // title is a required string
  name: {
    type: String,
    required: true
  },
 
  status: {
    type: String,
    required: true
  },
  role: {
    type: String,
  },

  profile:[{
        type: String,
        link:{type:String},
        
        bands: String

    }]

});


// Create the Article model with the ArticleSchema
var User = mongoose.model("User", UserSchema);

// Export the model
module.exports = User;
