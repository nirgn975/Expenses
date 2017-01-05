const express = require('express');
const mongoose = require('mongoose');

const app = express();

const api = require('./api/api');
const config = require('./config/config');
const logger = require('./util/logger');

// db.url is different depending on NODE_ENV
mongoose.connect(config.db.url);
mongoose.Promise = global.Promise;

if (config.seed) {
  require('./util/seed'); // eslint-disable-line global-require
}

require('./config/passport');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api', api);

// set up global error handling
app.use((err, req, res, next) => {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error([err.stack]);
  res.status(500).send('Oops');
});

// export the app for testing
module.exports = app;
