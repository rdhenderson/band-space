const Review = require('../../models/review.js');

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
  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.update('/api/users/:id', (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id: req.params.id };
    Review.findOneAndUpdate(query, req.body.review, options, (err, review) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        console.log("result", review);
        res.status(200).json(review);
      }
    })
  });
  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check
  app.delete('api/reviews/:id', (req, res) => {
    if (req.body.token) {
      Review.findByIdAndRemove(req.params.id, function (err, review) {
        res.send({
          message: "Review successfully deleted",
          id: review._id
        })
      })
    }
  });
}
