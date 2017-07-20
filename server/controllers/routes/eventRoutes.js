const Event = require('../../models/event.js');

module.exports = function(app) {
  app.get('/api/events', (req, res) => {
    Event.find({}).then( (results) => res.send(results));
  });

  app.get('/api/events/:id', (req, res) => {
    Event.findOne({_id: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send("ERROR", err));
  });

  //Add a new venue
  app.post('/api/events/', (req, res) => {
    const query = { name: req.body.name };

    const event = {
      user_id: req.params.id,
      name: req.body.name,
      profile: req.body.profile,
      genres: req.body.genres,
    }
    Event.findOrCreate(query, event, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) console.error('ERROR', err);
      // Send to favorites route to populate favorites for return
      res.redirect(`/api/events/`);
    });
  });
  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check
  app.delete('api/events/:id', (req, res) => {
    if (req.body.token) {
      Event.findByIdAndRemove(req.params.id, function (err, event) {
        res.send({
          message: "Event successfully deleted",
          id: event._id
        })
      })
    }
  });
}
