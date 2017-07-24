const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const jwtSecret = process.env.JWT_SECRET;

/**
 *  The Auth Checker middleware function.
 */
 // route middleware to make sure a user is logged in
 const isLoggedIn = (req, res, next) => {
     // if user is authenticated in the session, carry on
     if (req.isAuthenticated())
         return next();
     // if they aren't redirect them to the home page
     res.redirect('/login');
 };

const isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  // decode the token using a secret key-phrase
  return jwt.verify(token, jwtSecret, (err, { _id }) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }
    // check if a user exists
    return User.findById(_id, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }
      return next();
    });
  });
};

module.exports = { isAuthenticated, isLoggedIn };
