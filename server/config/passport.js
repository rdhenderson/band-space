// config/passport.js
const configAuth = require('./auth');
const User = require('../models/user.js');

module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  // load all the authentication strategies
  require('./strategy/localSignupStrategy.js')(passport);
  require('./strategy/localLoginStrategy.js')(passport);
  require('./strategy/googleStrategy.js')(passport);
  require('./strategy/facebookStrategy.js')(passport);
  require('./strategy/spotifyStrategy.js')(passport);
  require('./strategy/twitterStrategy.js')(passport);


};
