const Venue = require('../models/venue.js');
const getEventfulVenues = require('./event-search.js');

const API = {
  getEventfulVenues,
  getVenues: function () {
    return Venue.find({}).then( (results) => results );
  }
}

module.exports = API;
