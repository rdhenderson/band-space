const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, trim: true, required: true },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
  },
  date: { type: Date },
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

const Event = mongoose.model("Event", EventSchema);

// Export the model
module.exports = Event;
