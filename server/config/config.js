require('dotenv').config({ silent: true });
const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  expireTime: 24 * 60 * 10, // 10 days in minutes
  secrets: {
    facebookAuth: {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
    },
    twitterAuth: {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_APP_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
    },
    googleAuth: {
      clientID: process.env.GOOGLE_APP_ID,
      clientSecret: process.env.GOOGLE_APP_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
    },
  },
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
const envConfig = require(`./${process.env.NODE_ENV}`) || {}; // eslint-disable-line global-require

// merge the two config files together the envConfig file
// will overwrite properties on the config object.
module.exports = _.merge(config, envConfig);
