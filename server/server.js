// Import Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./controllers/routes');
const dotenv = require('dotenv-safe');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Initialize process.env from .env file
dotenv.config();
// Express Port/App Declaration
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use cookies (required for auth)
app.use(cookieParser());
// required for passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
})); // session secret

require('./config/passport.js')(passport); // pass passport for configuration

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static(path.resolve(`${__dirname}/../public/`)));

// Initialize routes
routes(app, passport);

// Setup Mongo/Mongoose and add promise model
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/gig-aware';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Save mongoose default connection
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Database Error:', error);
});
// Connect to database and set the app to listen on port 3000
db.once('open', () => {
  console.log('Connected to database');
  app.listen(PORT, () => {
    console.log('App running on port', PORT);
  });
});
