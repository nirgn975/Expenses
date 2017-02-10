const User = require('./userModel');
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
        message: 'User successfully created!',
        user: savedUser,
      });
    }, (error) => {
      logger.error([error]);
      res.json(error);
    });
};
