const fs = require('fs');
const Venue = require('../models/Venue.js')

fs.readFile('./venues.json', (results) => {
  const venues = JSON.parse(results);
  venues.forEach( (item) => {
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
    Venue.create(venueObj, (doc) => console.log('item added') );
  });
});
