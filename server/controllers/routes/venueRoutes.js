const Venue = require('../../models/venue.js');
const getEventfulVenues = require('../../api/event-search.js');
const isAuthenticated = require('../../helpers/auth_check.js');

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
    Venue.find({}).then( (results) => res.send(results));
  });

  app.get('api/venues/:id', (req,res) => {
   Venue.findOne({"_id": req.params._id})
   .populate('reviews')
   .populate('events')
   .populate({
     path: 'staff',
     populate: {
       path: 'user_id',
       model: 'User'
     }
   })
   .populate({
     path: 'staff',
     populate: {
       path: 'reviews',
       model: 'Review'
     }
   })
    .then( (results) => {
      console.log("Population Control?", results[0]);
      return res.send(results)
    });
  });

  //Add a new venue
  app.post('/api/venues', (req, res) => {
    console.log("Posting a new venue", req.body.venue);
    const query = { name: req.body.venue.name };
    Venue.findOrCreate(query, req.body.venue, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) console.error('ERROR', err);
      // Send to favorites route to populate favorites for return
      res.redirect(`/api/venue/`);
    });
  });

  app.put('/api/venues/:id', isAuthenticated, (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id: req.params.id };
    Venue.findOneAndUpdate(query, req.body.venue, options, (err, venue) => {
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
  app.delete('api/venues/:id', isAuthenticated, (req, res) => {
    if (req.body.token) {
      Venue.findByIdAndRemove(req.params.id, function (err, venue) {
        res.send({
          message: "Venue successfully deleted",
          id: venue._id
        })
      })
    }
  });
};
