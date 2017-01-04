// intro point for our server.

// setup config first before anything by requiring it
const config = require('./config/config');
const app = require('./server');
const logger = require('./util/logger');

app.listen(config.port);
logger.log([`listening on http://localhost: ${config.port}`]);
