// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '459378637753291', // your App ID
        'clientSecret'  : 'ac9fdd65361ad2d8982c550f8887fdc8', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'dC7jRwO263ruoShu2hhBHCGWX',
        'consumerSecret'    : 'nUsOqsFqgKs7yH3Pay226Ybv1bV213BCeMvkk9DfqVaZuYXe4q',
        'callbackURL'       : 'http://127.0.0.1:3000/auth/twitter/callback'
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
