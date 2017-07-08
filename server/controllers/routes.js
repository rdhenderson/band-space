import path from 'path';

module.exports = function routes (app) {
  app.get('/', (req, res) =>
    res.sendFile(path.resolve(`${__dirname}/../../src/index.html`))
  );
};
