const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create');

const GroupSchema = new Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true },
  phone: { type: String, trim: true },
  members: [{
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    instrument: { type: String, trim: true },
  }],
  profile_image: {
    img: { type: String, default: '/img/group.svg'},
    xpos: { type: Number, default: 0.5 },
    ypos:  { type: Number, default: 0.5 },
    scale:  { type: Number, default: 1 },
    rotate: { type: Number, default: 0 },
  },
  images: [{ type: String, trim: true }],
  spotify: { type: String, trim: true },

  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

GroupSchema.plugin(findOrCreate);

const Group = mongoose.model("Group", GroupSchema);

// Export the model
module.exports = Group;
