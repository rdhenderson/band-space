const Group = require('../../models/group.js');
const { isAuthenticated } = require('../../helpers/auth_check.js');

module.exports = function(app) {
  app.get('/api/groups', (req, res) => {
    Group.find({}).then( (results) => res.send(results));
  });

  app.get('/api/groups/:id', (req, res) => {
    Group.findOne({_id: req.params.id})
    .populate('reviews')
    .then( (results) => res.send(results))
    .catch( (err) => res.send("ERROR", err));
  });

  app.post('/api/groups', isAuthenticated, (req, res) => {
    const query = { name: req.body.groupName };
    const group = {
      name: req.body.groupName,
      address: {
        street: req.body.address
      },
      phone: req.body.phonenumber,
      description: req.body.description,
      members: req.body.members,
    };

    Group.findOrCreate(query, group, (err, group) => {
      if (err) console.error('ERROR', err);
      // Render not found error
      res.json(group);
    });
  });

  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.put('/api/groups/:id', isAuthenticated, (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id: req.params.id };
    Venue.findOneAndUpdate(query, req.body.group, options, (err, group) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        console.log("result", group);
        // Render not found error
        if(!group) {
          return res.status(404).json({
            message: 'Group with id ' + req.params.id + ' can not be found.'
          });
        }
        res.status(200).json(group);
      }
    })
  });

  app.delete('/api/groups/:id', isAuthenticated, (req, res) => {
    if (req.body.token) {
      Group.findByIdAndRemove(req.params.id, function (err, group) {
        // Render not found error
        if(!group) {
          return res.status(404).json({
            message: 'Group with id ' + id + ' can not be found.'
          });
        }
        res.send({
          message: "Group successfully deleted",
          id: group._id
        })
      })
    }
  });
}
