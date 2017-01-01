const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  expireTime: 24 * 60 * 10, // 10 days in minutes
  secrets: {
    jwt: process.env.JWT || 'gumball',
  },
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
const envConfig = require(`./${process.env.NODE_ENV}`) || {};

// merge the two config files together the envConfig file
// will overwrite properties on the config object.
module.exports = _.merge(config, envConfig);
