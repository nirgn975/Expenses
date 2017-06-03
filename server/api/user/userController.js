const User = require('./userModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.getByToken = (req, res, next) => {
  User.findOne({ token: req.headers.token })
    .then((user) => {
      req.user = user;
      next();
    }, (error) => {
      res.json(error);
    });
};

exports.post = (req, res) => {
  const newuser = req.body;

  User.create(newuser)
    .then((savedUser) => {
      res.json({
        _message: 'User successfully created!',
        user: savedUser,
      });
    }, (error) => {
      logger.error([error]);
      res.json(error);
    });
};

exports.getOwn = (req, res) => {
  User.findOne({ token: req.headers.token })
    .then((user) => {
      res.json(user);
    }, (error) => {
      res.json(error);
    });
};

exports.put = (req, res) => {
  const update = req.body;

  User.findOne({ token: req.headers.token })
    .then((user) => {
      _.merge(user, update);

      user.save((error, saved) => {
        if (error) {
          res.json(error);
        } else {
          res.json({
            _message: 'User successfully updated!',
            user: saved,
          });
        }
      });
    }, (error) => {
      res.json(error);
    });
};
