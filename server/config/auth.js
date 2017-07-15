// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '372238221927-kcog0bb5r3e9m8ik0sb0vo26ah5hpc73.apps.googleusercontent.com',
        'clientSecret'  : 'TIyFsMxXhMYZf8H-zdYf9yFL',
        'callbackURL'   : 'http://127.0.0.1:3000/auth/google/callback'
    },

    'spotifyAuth' : {
        'clientID'      : 'cb1979e201844bbdbeb03bc87edf44e0',
        'clientSecret'  : '29d69ef0938341898f41be774f8caaba',
        'callbackURL'   : 'http://localhost:3000/auth/spotify/callback'
    }

};
