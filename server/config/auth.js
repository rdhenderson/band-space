// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOK_KEY, // your App ID
        'clientSecret'  : process.env.FACEBOOK_SECRET, // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : process.env.TWITTER_KEY,
        'consumerSecret'    : process.env.TWITTER_SECRET,
        'callbackURL'       : 'http://127.0.0.1:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : process.env.GOOGLE_KEY,
        'clientSecret'  : process.env.GOOGLE_SECRET,
        'callbackURL'   : 'http://127.0.0.1:3000/auth/google/callback'
    },

    'spotifyAuth' : {
        'clientID'      : process.env.SPOTIFY_KEY,
        'clientSecret'  : process.env.SPOTIFY_SECRET,
        'callbackURL'   : 'http://localhost:3000/auth/spotify/callback'
    }

};
