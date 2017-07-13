import path from 'path';
import Venue from '../models/venue.js';
import API from '../api';

module.exports = function routes (app) {
  app.get('/api/venues/updateFromEventful', (req, res) => {
    API.getEventfulVenues()
    .then( () => res.redirect('/api/venues'))
    .catch( (err) => {
      console.log("ERROR", err);
      res.send("ERROR!", err);
    });
  });

  app.get('/api/venues', (req, res) => {
    Venue.find({}).then( (results) => res.send(results));
  });

  app.get('api/venues/:id', (req,res) => {
   Venue.findOne({"_id": req.params._id})
    .then( (results) => res.send(results) )
  });
 
  //Catch-all directs everything else to react front end/index.html
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(`${__dirname}/../../public/index.html`))
  );
};
