const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: { type: String, trim: true, required: true },
  title: { type: String, trim: true },
  body: { type: String, trim: true },
  author:  {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", ReviewSchema);

// Export the model
module.exports = Review;
