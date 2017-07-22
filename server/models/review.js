const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: { type: String, trim: true, required: true },
  title: { type: String, trim: true },
  details: { type: String, trim: true },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  venue_id: {
    type: Schema.Types.ObjectId,
    ref: 'Venue',
  },
  group_id: {
    type: Schema.Types.ObjectId,
    ref: 'Band',
  },

  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", ReviewSchema);

// Export the model
module.exports = Review;
