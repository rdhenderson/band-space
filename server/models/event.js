const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, trim: true, required: true },
  date: { type: String, trim: true },
  time: { type: String, trim: true },
  description: { type: String, trim: true },
  type: { type: String, enum: ['public', 'private']},
  groups: [{ type: Schema.Types.ObjectId, ref: 'Group'}],
  venue: { type: Schema.Types.ObjectId, ref: 'Venue'},
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],

  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const Event = mongoose.model("Event", EventSchema);

// Export the model
module.exports = Event;
