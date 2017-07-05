// Import Modules
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import routes from './controllers/routes';

// Express Port/App Declaration
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('src'));
// app.use(express.static(path.join(__dirname, '/')));

// Initialize routes
routes(app);

// Setup Mongo/Mongoose and add promise model
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/news-scraper';

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
