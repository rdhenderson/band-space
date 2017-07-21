const Band = require('../../models/band.js');
const isAuthenticated = require('../../helpers/auth_check.js');

module.exports = function(app) {
  app.get('/api/bands', (req, res) => {
    Band.find({}).then( (results) => res.send(results));
  });

  app.get('/api/bands/:id', (req, res) => {
    Band.findOne({_id: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send("ERROR", err));
  });

  app.post('/api/bands', isAuthenticated, (req, res) => {
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

    Band.findOrCreate(query, band, (err, group) => {
      if (err) console.error('ERROR', err);
      // Render not found error
      res.json(group);
    });
  });

  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.put('/api/bands/:id', isAuthenticated, (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id: req.params.id };
    Venue.findOneAndUpdate(query, req.body.band, options, (err, band) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        console.log("result", band);
        // Render not found error
        if(!band) {
          return res.status(404).json({
            message: 'Band with id ' + req.params.id + ' can not be found.'
          });
        }
        res.status(200).json(band);
      }
    })
  });
  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check
  app.delete('api/bands/:id', isAuthenticated, (req, res) => {
    if (req.body.token) {
      Band.findByIdAndRemove(req.params.id, function (err, band) {
        // Render not found error
        if(!band) {
          return res.status(404).json({
            message: 'Band with id ' + id + ' can not be found.'
          });
        }
        res.send({
          message: "Band successfully deleted",
          id: band._id
        })
      })
    }
  });
}
