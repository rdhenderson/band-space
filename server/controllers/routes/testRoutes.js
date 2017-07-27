const dummyApi = require('../../api/createFakerData.js');

module.exports = function(app) {
  app.get('/api/generateUser', (req, res) => {
    Artist.find({}).then( (results) => res.send(results));
  });
  app.get('/api/generate/user/:user/review/:venue', (req, res) => {
    Artist.find({}).then( (results) => res.send(results));
  });
  app.get('/api/generate/user/:id/group', (req, res) => {
    Artist.find({}).then( (results) => res.send(results));
  });
  app.get('/api/generate/venue', (req, res) => {
    Artist.find({}).then( (results) => res.send(results));
  });
  app.get('/api/generate/venue/:id/event', (req, res) => {
    Artist.find({}).then( (results) => res.send(results));
  });
}
