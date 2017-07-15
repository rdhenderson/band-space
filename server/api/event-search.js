/* Eventful API Documentation - https://api.eventful.com/docs/venues/search */

const axios = require('axios');
const Venue = require('../models/venue');

const eventfulApiKey = "B3rvtFwc45vjtTFK";
//Query Eventful API for venue information

async function getEventfulVenues() {
  // Page defaults to 1, increments with each call until it has listed all pages.

  const defaultSearchCoords = "38.9072,-77.0369";
  const queryURL = "http://api.eventful.com/json/venues/search"
  const queryString = `${queryURL}?app_key=${eventfulApiKey}&category=bar_nightlife&page_size=999&location=${encodeURIComponent("washington, dc")}`;

  return axios.get(queryString)
  .then( (results) => {
    // console.log("Results", results.data.venues.venue);
    results.data.venues.venue.forEach( (item) => {
      const venueObj = {
        name: item.venue_name,
        description: item.description,
        type: item.venue_type,
        evently_id: item.id,
        address: item.address,
        city: item.city_name,
        state: item.region_abbr,
        zipcode: item.postal_code,
        // image: item.image.medium.url
      };
      Venue.findOrCreate({name: item.venue_name}, venueObj, (doc) => console.log('item added', doc) );
    });
    return results;
  });
}
//Function to create local event object and push to eventArr
//Parameters: json event object, API identifier ("local", "ticketmaster", or "eventful")
// export default getEventfulVenues;
module.exports = getEventfulVenues;
