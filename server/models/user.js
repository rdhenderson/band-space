const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, trim: true, required: true },
  // email: {type: String, trim: true, require: true},
  // password: { type: String, trim: true, require: true },
  // zipcode: {type: Integer, trim:true, require: false},
  // phonenumber: {type: integer, trim:true, require: false},
  // Status - Basic, Moderator, Admin
  status: { type: String, trim: true, required: true, default: "Basic"},
  // Role - Artist, Staff, Both(?)
  role: { type: String },
  // Either artist of staff id could be filled
  artist_id: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
  },
  band_id:{
     type: Schema.Types.ObjectId,
    ref: 'Band',
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
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },

});

const User = mongoose.model("User", UserSchema);

// Export the model
module.exports = User;
