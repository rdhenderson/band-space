const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  name: { type: String, trim: true, required: true },
  address: { type: String, trim: true, required: true, index: { unique: true } },
  capacity: { type: Integer },
  profile: { type: String, trim: true },
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
  events: {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Comment model
      ref: 'Event',
  },
  staff: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Comment model
      ref: 'User',
    },
  ],
});

const Venue = mongoose.model("Venue", VenueSchema);

// Export the model
module.exports = Venue;
