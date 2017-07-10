import mongoose from 'mongoose';
import findOrCreate from 'mongoose-find-or-create';

const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  name: { type: String, trim: true, required: true },
  address: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zipcode: { type: String, trim: true },
  image: { type: String, trim: true },
  description: { type: String, trim: true },

  capacity: { type: Number },
  //TODO: Make profile a separate model and link here instead of String
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

VenueSchema.plugin(findOrCreate);

const Venue = mongoose.model("Venue", VenueSchema);

// Export the model
module.exports = Venue;
