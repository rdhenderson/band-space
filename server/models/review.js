const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: { type: String, trim: true, required: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event'},
  title: { type: String, trim: true },
  notes: { type: String, trim: true },
  author:  {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  rating: {type: Number},
  survey: {
    professionalism: { type: Number, trim: true },
    ambiance: { type: Number, trim: true },
    crowd: { type: Number, trim: true },
    sound: { type: Number, trim: true },
    value: { type: Number, trim: true },
    musicality: { type: Number, trim: true },
    showmanship: { type: Number, trim: true }
  },
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", ReviewSchema);

// Export the model
module.exports = Review;
