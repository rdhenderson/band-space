// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArtistSchema = new Schema({
  // title is a required string
  name: {
    type: String,
    required: true
  },
 
  status: {
    type: String,
    required: true
  },
  role: {
    type: String,
  },

  profile:[{
        type: String,
        link:{type:String},
        
        bands: String

    }],
    events: {[]
    },

    reviews:{[]
    },
    userId: String

});


// Create the Article model with the ArticleSchema
var User = mongoose.model("Artist", ArtistSchema);

// Export the model
module.exports = Artist;