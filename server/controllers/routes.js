const path = require('path');

module.exports = function routes (app, passport) {

  require('./routes/authRoutes.js')(app, passport);
  require('./routes/userRoutes.js')(app);
  require('./routes/venueRoutes.js')(app);
  require('./routes/eventRoutes.js')(app);
  require('./routes/groupRoutes.js')(app);
  require('./routes/reviewRoutes.js')(app);
  require('./routes/testRoutes.js')(app);

  // TODO: REMOVE THIS ROUTE FROM PRODUCTION BUILD

  //Catch-all directs everything else to react front end/index.html
  app.get('*', (req, res) => {
    let indexFile;
    if (process.env.ENV_HEROKU) {
     indexFile = `${__dirname}/../../react-ui/build/index.html`;
   } else {
     indexFile = `${__dirname}/../../react-ui/public/index.html`;
   }
    res.sendFile(path.resolve(indexFile));
  });

};
