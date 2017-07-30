const path = require('path');
const { getCleanUser, generateToken } = require('../../helpers/users.js')
const User = require('../../models/user.js');
const Group = require('../../models/group.js');
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
    .populate('groups')
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

  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.put('/api/users/:id', isAuthenticated, (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id:req.params.id };
    User.findOneAndUpdate(query, req.body, options, (err, user) => {
      if (err) {
        res.json(err);
      } else {
        res.json(user);
      }
    })
  });

  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check

  app.delete('/api/users/:id', isAuthenticated, (req, res) => {
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) {
        res.json(err)
      } else {
        res.json({
          message: "User successfully deleted",
          id: user._id
        })
      }
    })
  });

  app.post('/api/users/:id/groups', isAuthenticated, (req, res) => {
    // console.log("Request Body:", req.body);
    const options = {appendToArray: true, upsert:true, new:true};
    const query = { name: req.body.name }
    Group.create(query, req.body, options, (err, group) => {
      if (err) console.log("ERROR CREATING BAND", err);
      User.findOrCreate({_id:req.params.id}, { groups: group }, options, (err, user) => {
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
