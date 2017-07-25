// Make all models available for group or individual export

const Artist = require('./artist.js');
const Band = require('./band.js'); // DEPRECATED
const Event = require('./event.js');
const Group = require('./group.js');
const Review = require('./Review.js');
const User = require('./User.js');
const Venue = require('./Venue.js');

module.exports = {
  Artist,
  Band,  // DEPRECATED
  Event,
  Group,
  Review,
  User,
  Venue
}
