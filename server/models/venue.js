const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');

const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  name: { type: String, trim: true, required: true },
  images: [{ type: String, trim: true }],
  description: { type: String, trim: true },
  capacity: { type: Number, trim: true },
  url: { type : String, trim: true },
  eventful_id: { type : String },
  address: {
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    zipcode: { type: String, trim: true },
    longitude: { type: String, trim: true },
    latitude: { type: String, trim: true },
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
  event_count: { type: Number, trim: true },
  events: [{
      type: Schema.Types.ObjectId,
      ref: 'Event',
  }],
  staff: [{
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    email: { type: String },
    name: String,
    phone: String,
    role: String,
  }],
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

VenueSchema.plugin(findOrCreate);

const Venue = mongoose.model("Venue", VenueSchema);

// Export the model
module.exports = Venue;
