const path = require('path');
const User = require('../../models/user.js');

module.exports = function(app, passport) {
  app.get('/api/users', (req, res) => {
    User.find({}).then( (users) => res.send(users));
  });

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  // process the signup form -- NOTE Change redirect to proper route once react connected.
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect : '/api/users', // redirect to the secure profile section
      failureRedirect : '/test/signup', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/api/users', // redirect to the secure profile section
      failureRedirect : '/test/login', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

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
      //   'https://www.googleapis.com/auth/plus.login',
      //   'https://www.googleapis.com/auth/plus.profile.emails.read' ]
      // }));

    app.get('/auth/google/callback',
      passport.authenticate('google', { failureRedirect: '/login' }),
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
