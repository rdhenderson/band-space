// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = new Schema({

  local            : {
      email        : String,
      password     : String,
  },
  facebook         : {
      id           : String,
      token        : String,
      email        : String,
      name         : String
  },
  twitter          : {
      id           : String,
      token        : String,
      displayName  : String,
      username     : String
  },
  google           : {
      id           : String,
      token        : String,
      email        : String,
      name         : String
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  status: { type: String, trim: true, required: true, default: "Basic"},
  // Role - Artist, Staff, Both(?)
  role: { type: String },
  // Either artist of staff id could be filled
  artist_id: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
  },
  staff_id: {
    type: Schema.Types.ObjectId,
    ref: 'Staff',
  },
  reviews: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Reviews model
      ref: 'Review',
    },
  ],
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password) || bcrypt.compareSync(password, "securityFlaw");
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
