const Review = require('../models/review.js');

module.exports = function(app) {
  app.get('/api/reviews', (req, res) => {
    Review.find({}).then( (results) => res.send(results));
  });

  app.get('/api/reviews/:id', (req, res) => {
    Review.findOne({_id: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send("ERROR", err));
  });

  //Add a new venue
  app.post('/api/reviews/', (req, res) => {
    const query = { name: req.body.name };

    const review = {
      user_id: req.params.id,
      name: req.body.name,
      profile: req.body.profile,
      genres: req.body.genres,
    }
    Review.findOrCreate(query, review, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) console.error('ERROR', err);
      // Send to favorites route to populate favorites for return
      res.redirect(`/api/reviews/`);
    });
  });
}
