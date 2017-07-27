// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var VenueSchema = new Schema({
  // title is a required string
  name: {
    type: String,
    required: true
  },
  address: {
    type:String
  },

  capacity:{
    type: Integer
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
var Venue = mongoose.model("Venue", VenueSchema);

// Export the model
module.exports = Venue;