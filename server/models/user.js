// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String, index: { unique: true }},
  password: { type: String },
  zipcode: { type: String },
  phone: { type: String },
  admin: {
    type: Boolean,
    default: false,
  },
  moderator: {
    type: Boolean,
    default: false,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  verifyEmailToken: String,
  verifyEmailTokenExpires: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
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
  spotify          : {
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
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// NOT USED - RELYING ON INDEXES AT THE MOMENT.
function isUserUnique(reqBody, cb) {
  var username = reqBody.username ? reqBody.username.trim() : '';
  var email = reqBody.email ? reqBody.email.trim() : '';

  User.findOne({
    $or: [{
      'username': new RegExp(["^", username, "$"].join(""), "i")
    }, {
      'email': new RegExp(["^", email, "$"].join(""), "i")
    }]
  }, function(err, user) {
    if (err)
      throw err;

    if (!user) {
      cb();
      return;
    }

    var err;
    if (user.username === username) {
      err = {};
      err.username = '"' + username + '" is not unique';
    }
    if (user.email === email) {
      err = err ? err : {};
      err.email = '"' + email + '" is not unique';
    }

    cb(err);
  });
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
