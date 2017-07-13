const path = require('path');
const Venue = require('../models/venue.js');
const Artist = require('../models/artist.js');
const API = require('../api');

module.exports = function routes (app) {
  // import artist routes
  // TODO: figure out cleaner import/export method
  require('./artistRoutes.js')(app);

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

  //Catch-all directs everything else to react front end/index.html
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(`${__dirname}/../../public/index.html`))
  );
};
