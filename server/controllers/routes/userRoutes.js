const path = require('path');
const User = require('../../models/user.js');

module.exports = function(app, passport) {
  app.get('/api/users', (req, res) => {
    User.find({}).then( (users) => res.send(users));
  });

  app.get('/login', (req, res) =>
    res.sendFile(path.resolve(`${__dirname}/../../public/test-login.html`)));

  app.get('/signup', (req, res) =>
    res.sendFile(path.resolve(`${__dirname}/../../public/test-signup.html`)));

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
  // app.get('/forgot', (req, res) => res.sendFile(path.resolve(`${__dirname}/../../public/test-forgot.html`)));

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect : '/api/users', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/api/users', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));


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
