const Event = require('../../models/event.js');
const { isAuthenticated } = require('../../helpers/auth_check.js');

module.exports = function(app) {
  app.get('/api/events', (req, res) => {
    Event.find({}).then( (results) => res.send(results));
  });

  app.get('/api/events/:id', (req, res) => {
    Event.findOne({_id: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send("ERROR", err));
  });

  app.post('/api/events', isAuthenticated, (req, res) => {
    Event.create(event, (err, event) => {
      if (err) console.error('ERROR', err);
      res.json(event)
    });
  });


  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.put('/api/users/:id', isAuthenticated, (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id: req.params.id };
    Event.findOneAndUpdate(query, req.body.event, options, (err, event) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        console.log("result", event);
        res.status(200).json(event);
      }
    })
  });
  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check
  app.delete('/api/events/:id', isAuthenticated, (req, res) => {
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
