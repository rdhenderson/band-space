const path = require('path');

module.exports = function routes (app, passport) {

  require('./routes/userRoutes.js')(app, passport);
  require('./routes/venueRoutes.js')(app);
  require('./routes/artistRoutes.js')(app);
  require('./routes/bandRoutes.js')(app);
  require('./routes/eventRoutes.js')(app);
  require('./routes/reviewRoutes.js')(app);
  require('./routes/reviewRoutes.js')(app);

  //Catch-all directs everything else to react front end/index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../../public/index.html`))
  });

};
