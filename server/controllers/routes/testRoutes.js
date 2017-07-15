// Serve static html pages to test functionality
module.exports = function(app) {

    app.get('/test/login', (req, res) =>
      res.sendFile(path.resolve(`${__dirname}/../../public/test-login.html`)));

    app.get('/test/signup', (req, res) =>
      res.sendFile(path.resolve(`${__dirname}/../../public/test-signup.html`)));

}
