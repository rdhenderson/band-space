const path = require('path');
const { getCleanUser, generateToken } = require('../../helpers/users.js')
const User = require('../../models/user.js');
const Band = require('../../models/band.js');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const { isAuthenticated } = require('../../helpers/auth_check.js');
var mongoose = require('mongoose');

module.exports = function(app, passport) {

  app.get('/api/users', (req, res) => {
    User.find({}).then( (users) => res.send(users));
  });


  app.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
    .populate('bands')
    .populate('reviews')
    .exec( (err, user) => {
      if (err){
        console.log("ERROR", err);
        res.json(err);
      } else {
        res.status(200).json(user);
      }
    })
  });

  // app.get('/api/users/:id/bands', (req, res) => {
  //   User.findById(req.params.id, (err, user) => {
  //     console.log('User bands', user.bands);
  //     const bandPromises = user.bands.map( (id) => Band.find({_id: id}));
  //     Promise.all(bandPromises).then( (bands) => {
  //       console.log('Bands', bands);
  //       if (err){
  //         console.log("ERROR", err);
  //         res.json(err);
  //       } else {
  //         res.status(200).json(bands);
  //       }
  //     });
  //   });
  // });

  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.put('/api/users/:id', isAuthenticated, (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id:req.params.id };
    User.findOneAndUpdate(query, req.body, options, (err, user) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        res.redirect(303, `/api/users/${user._id}`);
      }
    })
  });

  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check

  app.delete('/api/users/:id', isAuthenticated, (req, res) => {
      User.findByIdAndRemove(req.params.id, function (err, user) {
        res.send({
          message: "User successfully deleted",
          id: user._id
        })
      })
  });

  app.post('/api/users/:id/groups', isAuthenticated, (req, res) => {
    // console.log("Request Body:", req.body);
    const options = {appendToArray: true, upsert:true, new:true};
    const query = { name: req.body.name }
    Band.create(query, req.body, options, (err, group) => {
      if (err) console.log("ERROR CREATING BAND", err);
      User.findOrCreate({_id:req.params.id}, { bands: group }, options, (err, user) => {
        if (err) {
          res.json({
            success: false,
            message: 'Check the form for errors.',
            error: err,
          });
        } else {
          // res.json(user);
          res.redirect(301, `/api/users/${user._id}`);
        }
      })
    })
  })

};
