/* Eventful API Documentation - https://api.eventful.com/docs/venues/search */

const axios = require('axios');

//Query Eventful API for venue information
const eventfulApiKey = "B3rvtFwc45vjtTFK";
const defaultSearchCoords = "38.9072,-77.0369";
const queryURL = "http://api.eventful.com/json/venues/search"
const baseQueryString = `${queryURL}?app_key=${eventfulApiKey}&category=bar_nightlife&page_size=50&location=${encodeURIComponent("washington, dc")}`;

function getEventfulVenues(pageNumber=1) {
  // Page defaults to 1, increments with each call until it has listed all pages.
  const queryString = `${baseQueryString}&page_number=${pageNumber}`;
  axios.get(queryString)
    .then( (response) => {
      const page = response.data.page_number;
      const totalPages = response.data.page_count;
      response.data.venues.venue.forEach( (item) => console.log(item.venue_name));
      if (page < totalPages) return getEventfulVenues(page+1);

    });
}
//Function to create local event object and push to eventArr
//Parameters: json event object, API identifier ("local", "ticketmaster", or "eventful")


getEventfulVenues();
