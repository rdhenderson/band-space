const Band = require('../../models/band.js');

module.exports = function(app) {
  app.get('/api/bands', (req, res) => {
    Band.find({}).then( (results) => res.send(results));
  });

  app.get('/api/bands/:id', (req, res) => {
    Band.findOne({_id: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send("ERROR", err));
  });

  // Add a new venue
  // FIXME: Add proper fields to query for bands
  app.post('/api/bands', (req, res) => {
    const query = { name: req.body.name };
    const band = {
      name: req.body.name,
      profile: req.body.profile,
      genres: req.body.genres,
    }

    Band.findOrCreate(query, band, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) console.error('ERROR', err);
      // Send to favorites route to populate favorites for return
      res.redirect(`/api/bands/`);
    });
  });
}
