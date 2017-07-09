import Venue from '../models/venue.js';
import getEventfulVenues from './event-search.js';

const API = {
  getEventfulVenues,
  getVenues: function () {
    return Venue.find({}).then( (results) => results );
  }
}

module.exports = API;
