
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const bcrypt   = require('bcrypt-nodejs');
const findOrCreate = require('mongoose-find-or-create');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
// define the schema for our user model
var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true },
  zipcode: { type: String },
  phone: { type: String },
  admin: { type: Boolean, default: false },
  moderator: { type: Boolean, default: false },
  profile_image: {
    img: { type: String, default: '/img/user.svg'},
    xpos: { type: Number, default: 0.5 },
    ypos:  { type: Number, default: 0.5 },
    scale:  { type: Number, default: 1 },
    rotate: { type: Number, default: 0 },
    // imageStyle is deprecated and should be removed.
    imageStyle: {
      type: String,
      default: "{}",
    }
  },
  images: [{ type: String, trim: true }],
  bands: [{
    type: Schema.Types.ObjectId,
    ref: 'Band',
  }],
  venues:[{
    type: Schema.Types.ObjectId,
    ref: 'Venue',
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
  tags: [{ type: String, trim: true }],
  isEmailVerified: { type: Boolean, default: false },
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
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.plugin(findOrCreate);
userSchema.plugin(deepPopulate);

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
