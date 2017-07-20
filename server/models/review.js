const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  name: { type: String, trim: true, required: true },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // #TODO: Decide how to structure review data and whether its a single field or multiple
  review_data: { type: String, trim: true, required: true},
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", ReviewSchema);

// Export the model
module.exports = Review;
