const Review = require('../../models/review.js');
const Venue = require('../../models/venue.js');
const Group = require('../../models/group.js');
const User = require('../../models/user.js');

const { isAuthenticated } = require('../../helpers/auth_check.js');

module.exports = function(app) {
  app.get('/api/reviews', (req, res) => {
    Review.find({}).then( (results) => res.send(results));
  });

  app.get('/api/reviews/:id', (req, res) => {
    Review.findOne({_id: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send(err));
  });

  // Get all reviews authored by a user
  app.get('/api/reviews/users/:id/author', (req, res) => {
    Review.find({author: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send(err));
  });

  // Get all reviews about an item
  app.get('/api/reviews/subject/:id', (req, res) => {
    Review.find({subject: req.params.id})
    .then( (results) => res.send(results))
    .catch( (err) => res.send(err));
  });

  app.post('/api/reviews/venues/', (req, res) => {
    Review.create(req.body, (err, review) => {
      const update = {$push: {"reviews": review._id}};
      const options = {new : true};
      Venue.findByIdAndUpdate(review.subject, update, options)
      .then( (venue) => {
        Venue.findById(venue._id)
        .populate('reviews')
        .then( (venue) => res.send(venue))
      })
      .catch( (err) => res.send(err));
    });
  });

  app.post('/api/reviews/users/', (req, res) => {
    Review.create(req.body, (err, review) => {
      const update = {$push: {"reviews": review._id}};
      const options = {new : true};
      User.findByIdAndUpdate(review.subject, update, options)
      .then( (user) => {
        User.findById(user._id)
        .populate('reviews')
        .then( (user) => res.send(user))
      })
      .catch( (err) => res.send(err));
    });
  });

  app.post('/api/reviews/users/', (req, res) => {
    Review.create(req.body, (err, review) => {
      const update = {$push: {"reviews": review._id}};
      const options = {new : true};
      Group.findByIdAndUpdate(review.subject, update, options)
      .then( (user) => {
        Group.findById(user._id)
        .populate('reviews')
        .then( (user) => res.send(user))
      })
      .catch( (err) => res.send(err));
    });
  });
  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.put('/api/reviews/:id', isAuthenticated, (req, res) => {
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
  app.delete('/api/reviews/:id', isAuthenticated, (req, res) => {
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
