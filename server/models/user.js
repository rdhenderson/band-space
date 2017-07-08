const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, trim: true, required: true },
  // password: { type: String, trim: true, required: true },
  // Status - Basic, Moderator, Admin
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
    ref: 'Artist',
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
