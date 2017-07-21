const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, trim: true, required: true },
  artists: [{ type: String, trim: true }],
  date: { type: String },
  time: { type: String },
  venue: { type: Schema.Types.ObjectId, ref: 'Venue'},
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const Event = mongoose.model("Event", EventSchema);

// Export the model
module.exports = Event;
