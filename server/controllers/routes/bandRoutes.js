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
    const query = { name: req.body.groupName };
    const band = {
      name: req.body.groupName,
      address: {
        street: req.body.address
      },
      phone: req.body.phonenumber,
      description: req.body.description,
      members: req.body.members,
    };

    Band.findOrCreate(query, band, (err, venue) => {
      // my new or existing model is loaded as result
      if (err) console.error('ERROR', err);
      // Send to favorites route to populate favorites for return
      res.redirect(`/api/bands/`);
    });
  });
  
  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.update('/api/bands/:id', (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id: req.params.id };
    Venue.findOneAndUpdate(query, req.body.band, options, (err, band) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        console.log("result", band);
        res.status(200).json(band);
      }
    })
  });
  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check
  app.delete('api/bands/:id', (req, res) => {
    if (req.body.token) {
      Band.findByIdAndRemove(req.params.id, function (err, band) {
        res.send({
          message: "Band successfully deleted",
          id: band._id
        })
      })
    }
  });
}
