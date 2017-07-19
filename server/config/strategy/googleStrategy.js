const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('../auth');
const User = require('../../models/user.js');

// expose this function to our app using module.exports
module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID        : configAuth.googleAuth.clientID,
    clientSecret    : configAuth.googleAuth.clientSecret,
    callbackURL     : configAuth.googleAuth.callbackURL,
    profileFields : ['profile', 'email'],
    passReqToCallback : true,
  }, function(req, token, refreshToken, profile, done) {
    console.log('profile', JSON.stringify(profile));
    const userGoogle = {
      id : profile.id,
      token : token,
      name  : profile.displayName,
      email : profile.emails[0].value,
    };
      // User.findOne won't fire until we have all our data back from Google
      process.nextTick(function() {
        if (!req.user) {
          const query = {'google.id': profile.id};
          User.findOneAndUpdate(query, { userGoogle }, { upsert:true }, function(err, user){
            if (err) return done(err);
            return done(null, user);
          });
        } else {
          // user already exists and is logged in, we have to link accounts
          const user = req.user; // pull the user out of the session
          // update the current users facebook credentials
          user.google = userGoogle;
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
          // try to find the user based on their google id
          // User.findOne({ 'google.id' : profile.id }, function(err, user) {
          //     if (err)
          //         return done(err);
          //     if (user) {
          //         // if a user is found, log them in
          //         return done(null, user);
          //     } else {
          //         // if the user isnt in our database, create a new user
          //         const newUser          = new User();
          //
          //         // set all of the relevant information
          //         newUser.google.id    = profile.id;
          //         newUser.google.token = token;
          //         newUser.google.name  = profile.displayName;
          //         newUser.google.email = profile.emails[0].value;
          //
          //         // save the user
          //         newUser.save(function(err) {
          //             if (err)
          //                 throw err;
          //             return done(null, newUser);
          //         });
          //     }
          // });
