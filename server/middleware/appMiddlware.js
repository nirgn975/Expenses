/** Setup global middleware here **/
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');

const sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
};

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(session(sess));
  app.use(cors());
  app.use(passport.initialize());
  app.use(passport.session());
};
