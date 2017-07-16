const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: { type: String, trim: true, required: true },
  bio: { type: String, trim: true, required: true},
  image: { data: Buffer, type: String},
  spotify:{ type : String },

  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },

});

const Profile = mongoose.model("Profile", ProfileSchema);

// Export the model
module.exports = Profile;
