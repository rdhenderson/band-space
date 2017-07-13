const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BandSchema = new Schema({
  name: { type: String, trim: true, required: true },

  profile: { type: String, trim: true, ref:"Profile", },
  spotify: {                   },
  user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
  },
  artist_id:{
     type: Schema.Types.ObjectId,
      ref: 'Artist',
  },

  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const Band = mongoose.model("Band", BandSchema);

// Export the model
module.exports = Band;
