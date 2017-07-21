const path = require('path');
const { getCleanUser, generateToken } = require('../../helpers/users.js')
const User = require('../../models/user.js');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const isAuthenticated = require('../../helpers/auth_check.js');

module.exports = function(app, passport) {
  app.get('/api/users', (req, res) => {
    User.find({}).then( (users) => res.send(users));
  });

  //TODO: CONFIRM THAT UPDATE PROPERLY AFFECTS ARRAYS
  app.put('/api/users/:id', isAuthenticated, (req, res) => {
    const options = { upsert: true, new: true };
    const query = { _id:req.params.id };
    User.findOneAndUpdate(query, req.body, options, (err, user) => {
      if (err) {
        console.log("ERROR", err);
        res.json(err);
      } else {
        console.log("result", user);
        res.status(200).json(user);
      }
    })
  });

  // FIXME: SET UP AUTH CHECKER MIDDLE WARE FOR PROTECTED routes
  // server/helpers/auth_check

  app.delete('api/users/:id', isAuthenticated, (req, res) => {
      User.findByIdAndRemove(req.params.id, function (err, user) {
        res.send({
          message: "User successfully deleted",
          id: user._id
        })
      })
  });

  // process the signup form -- NOTE Change redirect to proper route once react connected.
  app.post('/api/users/signup', (req, res, next) => {
    return passport.authenticate('local-signup', (err, token, user) => {
      if (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is asdffor a duplication email error
          // the 409 HTTP status code is for conflict error
          console.log('Hit mongo error');
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              email: 'This email is already taken.'
            }
          });
        }

        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }
      return res.status(200).json({
        success: true,
        message: 'You have successfully signed up! Now you should be able to log in.',
        token,
        user
      });
    })(req, res, next);
  });

  // process the login form
  app.post('/api/users/login', (req, res, next) => {
    passport.authenticate('local-login',  (err, token, user) => {
      if (err) {
        if (err.name === 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }

        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
        user
      });
    })(req, res, next);
  });

  app.get('/api/users/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  app.get('/api/users/refreshtoken', isAuthenticated, function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
      console.log("No Token found, throwing error");
      return res.status(401).json({
        message: 'Must pass token'
      });
    }

  })
  //get current user from token
  app.get('/api/users/me/from/token', function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
      console.log("No Token found, throwing error");
      return res.status(401).json({
        message: 'Must pass token'
      });
    }
    // decode token
    jwt.verify(token, jwtSecret, function(err, user) {
      if (err) {
        console.log("ERROR", err);
        console.log("Token Invalid.");
        return res.status(401).json({
          message: 'Must pass valid token'
        });
      }
      //return user using the id from w/in JWTToken
      User.findById({
        '_id': user._id
      }, function(err, user) {
        if (err)
          throw err;

        // Strip sensitive/irrelevant data before return
        user = getCleanUser(user);
        // refresh the token before returning it.
        token = generateToken(user);

        res.json({
          user: user,
          token: token
        });
      });
    });
  });

  app.get('/auth/spotify',
    passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'] }));

  app.get('/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

    app.get('/auth/google',
      passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback',
      passport.authenticate('google', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

      app.get('/auth/twitter',
        passport.authenticate('twitter'));

      app.get('/auth/twitter/callback',
        passport.authenticate('twitter', { failureRedirect: '/login' }),
        function(req, res) {
          // Successful authentication, redirect home.
          res.redirect('/');
        });

    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/'
        }));
// CONNECT ACCOUNTS TO USER PROFILE
  // Google
  app.get('/auth/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));
  // the callback after google has authorized the user

  app.get('/auth/connect/google/callback',
    passport.authorize('google', {
      successRedirect : '/',
      failureRedirect : '/'
  }));

  app.get('/auth/connect/facebook', passport.authorize('facebook', { scope : 'email' }));
  // handle the callback after facebook has authorized the user
  app.get('/auth/connect/facebook/callback',
      passport.authorize('facebook', {
          successRedirect : '/',
          failureRedirect : '/'
  }));

  app.get('/auth/connect/local', function(req, res) {
    // res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    // FIXME: Need to add a view for connecting a local email/password
  });

  app.post('/auth/connect/local', passport.authenticate('local-signup', {
      successRedirect : '/', // redirect to the secure profile section
      failureRedirect : '/auth/connect/local', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

// UNLINK ACCOUNTS FROM USER PROFILE
  app.get('/auth/unlink/local', function(req, res) {
    const user = req.user;
    user.local.email    = undefined;
    user.local.password = undefined;
    user.save(function(err) {
        res.redirect('/');
    });
  });

  // facebook -------------------------------
  app.get('/auth/unlink/facebook', function(req, res) {
    const user = req.user;
    user.facebook.token = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
  });

  app.get('/auth/unlink/twitter', function(req, res) {
    const user = req.user;
    user.twitter.token = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
  });

  // google -------------------------------
  app.get('/auth/unlink/google', function(req, res) {
    const user = req.user;
    user.google.token = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
  });

  // spotify -------------------------------
  app.get('/auth/unlink/spotify', function(req, res) {
    const user = req.user;
    user.spotify.token = undefined;
    user.save(function(err) {
        res.redirect('/profile');
    });
  });
  // app.get('/forgot', (req, res) => res.sendFile(path.resolve(`${__dirname}/../../public/test-forgot.html`)));

  // app.post('/forgot', async function(req, res, next) {
  //   console.log('Hit forgot,', req.body.email)
  //   const token = await crypto.randomBytes(20).toString('hex');
  //   // IF DOESN'T WORK USE .exec() (returns true promise)
  //   const user = await User.findOne({ email: req.body.email })
  //   if (!user) {
  //     req.flash('error', 'No account with that email address exists.');
  //     return res.redirect('/forgot');
  //   }
  //   user.resetPasswordToken = token;
  //   user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  //
  //   await user.save();
  //
  //   var smtpTransport = nodemailer.createTransport('SMTP', {
  //     service: 'SendGrid',
  //     auth: {
  //       user: '!!! YOUR SENDGRID USERNAME !!!',
  //       pass: '!!! YOUR SENDGRID PASSWORD !!!'
  //     }
  //   });
  //   var mailOptions = {
  //     to: user.email,
  //     from: 'passwordreset@demo.com',
  //     subject: 'Node.js Password Reset',
  //     text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
  //       'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
  //       'http://' + req.headers.host + '/reset/' + token + '\n\n' +
  //       'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  //   };
  //   smtpTransport.sendMail(mailOptions, function(err) {
  //     req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
  //     if (err) return next(err);
  //     res.redirect('/forgot');
  //   });
  // });
  // app.get('/profile', isLoggedIn, function(req, res) {
  //   res.send('profile.ejs', {
  //       user : req.user // get the user out of session and pass to template
  //   });
  // });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
