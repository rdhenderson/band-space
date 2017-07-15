const Venue = require('../models/venue.js');

module.exports = function(app) {
  // Initialize route to populate database
  app.get('/api/venues/updateFromEventful', (req, res) => {
    API.getEventfulVenues()
    .then( () => res.redirect('/api/venues'))
    .catch( (err) => {
      console.log("ERROR", err);
      res.send("ERROR!", err);
    });
  });

  app.get('/api/venues', (req, res) => {
    Venue.find({}).then( (results) => res.send(results));
  });

  app.get('api/venues/:id', (req,res) => {
   Venue.findOne({"_id": req.params._id})
    .then( (results) => res.send(results) )
  });

  //Add a new venue
  app.post('/api/venues', (req, res) => {
    const query = { name: req.body.venue.name };
    User.findOrCreate(query, req.body.venue, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) console.error('ERROR', err);

      // Send to favorites route to populate favorites for return
      res.redirect(`/api/venue/`);
    });
  });
};
