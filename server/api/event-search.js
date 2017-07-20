/* Eventful API Documentation - https://api.eventful.com/docs/venues/search */

const axios = require('axios');
const Venue = require('../models/venue');
const fs = require('fs');

const eventfulApiKey = "B3rvtFwc45vjtTFK";
//Query Eventful API for venue information

async function getEventfulVenues() {
  const defaultSearchCoords = "38.9072,-77.0369";
  const queryURL = "http://api.eventful.com/json/venues/search"
  const queryString = `${queryURL}?app_key=${eventfulApiKey}&category=bar_nightlife&page_size=999&location=${encodeURIComponent("washington, dc")}`;
  console.log("Querying eventful", queryString);
  return axios.get(queryString)
  .then( (results) => {
    results.data.venues.venue.forEach( (item) => {
      let images = [];
      if (item.image && item.image.medium)
          images.push(item.image.medium.url)
      if (item.image && item.image.url)
          images.push(item.image.url)
      if (item.image && item.image.small)
          images.push(item.image.small.url)
      if (item.image && item.image.thumb)
          images.push(item.image.thumb.url)

      const venueObj = {
        name: item.venue_name,
        event_count: item.event_count,
        description: item.description,
        type: item.venue_type,
        eventful_id: item.id,
        address: {
          street: item.address,
          city: item.city_name,
          state: item.region_abbr,
          zipcode: item.postal_code,
          longitude: item.longitude,
          latitude: item.latitude,
        },
        images: images,
        url: item.url, // NOTE: This is the evenful URL, not venue
        staff: (item.owner) ? [{ name: item.owner, role: "owner"}] : [],
      };
      Venue.create(venueObj, (doc) => console.log('item added', doc) );
    });
    return results;
  });
}
//Function to create local event object and push to eventArr
//Parameters: json event object, API identifier ("local", "ticketmaster", or "eventful")
// export default getEventfulVenues;
module.exports = getEventfulVenues;
