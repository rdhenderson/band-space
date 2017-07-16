const SpotifyStrategy = require('passport-spotify').Strategy;
const configAuth = require('../auth');
const User = require('../../models/user.js');

// expose this function to our app using module.exports
module.exports = function(passport) {
  passport.use(new SpotifyStrategy({
    clientID: configAuth.spotifyAuth.clientID,
    clientSecret: configAuth.spotifyAuth.clientSecret,
    callbackURL: configAuth.spotifyAuth.callbackURL,
    passReqToCallback : true,
  },
  function(req, token, refreshToken, profile, done) {
    const userSpotify = {
      id : profile.id,
      token : token,
      name  : profile.displayName,
      email : profile.emails[0].value,
    };
    process.nextTick(function() {
      if (!req.user) {
        const query = {'spotify.id': profile.id};
        User.findOneAndUpdate(query, { userSpotify}, { upsert:true }, function(err, user){
          if (err) return done(err);
          return done(null, user);
        });
      } else {
        // user already exists and is logged in, we have to link accounts
        const user = req.user; // pull the user out of the session
        // update the current users facebook credentials
        user.spotify = userSpotify;
        // save the user
        user.save(function(err) {
            if (err)
                throw err;
            return done(null, user);
        });
      }
    });
  }));
}


//   User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
//     return done(err, user);
//   });
// }
