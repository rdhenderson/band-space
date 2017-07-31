const Venue = require('../../models/venue.js');
const Event = require('../../models/event.js');

const getEventfulVenues = require('../../api/event-search.js');
const { isAuthenticated } = require('../../helpers/auth_check.js');

module.exports = function(app) {
  // Initialize route to populate database
  app.get('/api/venues/scrapeFromEventful', (req, res) => {
    console.log("Scraping data, this may take a while");
    getEventfulVenues()
    .then( () => res.redirect('/api/venues'))
    .catch( (err) => {
      console.log("ERROR", err);
      res.send("ERROR!", err);
    });
  });

  app.get('/api/venues', (req, res) => {
    return Venue.find({}).then( (results) => {
      return res.send(results)
    })
  });

  app.get('/api/venues/:id', (req,res) => {
   Venue.findById(req.params.id)
   .populate('reviews')
   .populate('events')
  //  .populate('staff')
   .then( (result) => {
      return res.send(result)
    });
  });

  //Add a new venue
  app.post('/api/venues', (req, res) => {
    const query = { name: req.body.venue.name };

    Venue.findOrCreate(query, req.body.venue, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) {
        res.json(err);
      } else {
        res.json(venue);
      }
    });
  });

  app.put('/api/venues/:id', isAuthenticated, (req, res) => {
    console.log("Hit route");
    const options = { upsert: true, new: true };
    const query = { _id: req.params.id };
    Venue.findOneAndUpdate(query, req.body, options, (err, venue) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        console.log("result", venue);
        res.status(200).json(venue);
      }
    })
  });

  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check
  app.delete('/api/venues/:id', isAuthenticated, (req, res) => {
    if (req.body.token) {
      Venue.findByIdAndRemove(req.params.id, function (err, venue) {
        res.send({
          message: "Venue successfully deleted",
          id: venue._id
        })
      })
    }
  });

  app.post('/api/venues/events', (req, res) => {
    Event.create(req.body, (err, event) => {
      const update = {$push: {"events": event._id}};
      const options = {new : true};
      Venue.findByIdAndUpdate(event.venue, update, options)
      .then( (venue) => {
        Venue.findById(venue._id)
        .populate('events')
        .populate('reviews')
        .then( (venue) => res.send(venue))
      })
      .catch( (err) => res.send(err));
    });
  });

};
