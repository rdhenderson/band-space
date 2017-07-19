const FacebookStrategy = require('passport-facebook').Strategy;
const configAuth = require('../auth');
const User = require('../../models/user.js');

// expose this function to our app using module.exports
module.exports = function(passport) {

  passport.use(new FacebookStrategy({
      // pull in our app id and secret from our auth.js file
      clientID        : configAuth.facebookAuth.clientID,
      clientSecret    : configAuth.facebookAuth.clientSecret,
      callbackURL     : configAuth.facebookAuth.callbackURL,
      profileFields : ["email"],
      passReqToCallback : true,
  },
    // facebook will send back the token and profile
    function(req, token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function() {
          // set all of the facebook information in our user model
          const userFacebook = {
            id: profile.id,
            token: token,
            name: profile.name.givenName + ' ' + profile.name.familyName,
            email: profile.emails[0].value,
          };

          // If user isn't logged in, handle log-in
          if (!req.user) {
            // find the user in the database based on their facebook id
            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
              if (err) return done(err);
              // if the user is found, then log them in
              if (user) {
                  return done(null, user); // user found, return that user
              } else {
                  // if there is no user found with that facebook id, create them
                  var newUser = new User();
                  newUser.facebook = facebook;
                  // save our user to the database
                  newUser.save(function(err) {
                      if (err) throw err;
                      // if successful, return the new user
                      return done(null, newUser);
                  });
                }
            });
          } else {
            // user already exists and is logged in, we have to link accounts
            const user = req.user; // pull the user out of the session
            // update the current users facebook credentials
            user.facebook = userFacebook;
            // save the user
            user.save(function(err) {
                if (err)
                    throw err;
                return done(null, user);
            });
          }
        });
    }));
};
