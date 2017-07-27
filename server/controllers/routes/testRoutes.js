const dummyApi = require('../../api/createFakerData.js');

module.exports = function(app) {
  app.get('/api/generate/user', (req, res) => {
    dummyApi.generateUser().then( (user) => res.json(user));
  });
  app.get('/api/generate/venue', (req, res) => {
    dummyApi.generateVenue().then( (user) => res.json(user));
  });
  app.get('/api/generate/user/:user/review/:venue', (req, res) => {
    dummyApi.generateReview(req.params.user, req.params.venue).then( (review) => res.json(review));
  });
  app.get('/api/generate/user/:id/group', (req, res) => {
    dummyApi.generateGroup(req.params.id).then( (group) => res.json(group));
  });

  // app.get('/api/generate/venue/:id/event', (req, res) => {
  //   dummyApi.generateUser().then( (user) => res.json(user));
  // });
}
