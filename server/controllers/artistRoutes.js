import Artist from '../models/artist.js';

module.exports = function(app) {
  app.get('/api/artists', (req, res) => {
    Artist.find({}).then( (results) => res.send(results));
  });

  app.get('/api/artists/:id', (req, res) => {
    Artist.findOne({_id: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send("ERROR", err));
  });

  //Add a new venue
  app.post('/api/artists', (req, res) => {
    const query = { name: req.body.name };
    const artist = {
      name: req.body.name,
      profile: req.body.profile,
      genres: req.body.genres,
    }
    Artist.findOrCreate(query, artist, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) console.error('ERROR', err);
      // Send to favorites route to populate favorites for return
      res.redirect(`/api/artists/`);
    });
  });
}
