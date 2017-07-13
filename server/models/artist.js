const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const findOrCreate = require('mongoose-find-or-create');

const ArtistSchema = new Schema({
  name: { type: String, trim: true, required: true },
  genres: [{ type: String, trim: true }],
  //TODO: Make profile a separate model and link here instead of String
  profile: { type: String, trim: true },
  user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
  },
  bands: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Band model
      ref: 'Band',
    },
  ],
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});
ArtistSchema.plugin(findOrCreate);

const Artist = mongoose.model("Artist", ArtistSchema);

// Export the model
module.exports = Artist;
