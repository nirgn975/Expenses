const Feed = require('./feedModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.params = (req, res, next, id) => {
  Feed.findById(id)
    .populate('user')
    .exec()
    .then((feed) => {
      if (!feed) {
        res.status(404);
        res.json({
          _message: `No feed message with that id: ${id}`,
          feed: null,
        });
      } else {
        req.feed = feed;
        next();
      }
    }, (error) => {
      res.status(500);
      error._message = error.message;
      res.json(error);
    });
};

exports.get = (req, res) => {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  Feed.find({
    date: {
      $gte: firstDay,
      $lte: lastDay,
    },
    user: req.user,
  })
  .populate('user')
  .exec()
  .then((feed) => {
    res.json(feed);
  }, (error) => {
    res.json(error);
  });
};

exports.post = (req, res) => {
  const newFeed = req.body;
  newFeed.user = req.user;

  Feed.create(newFeed)
    .then((savedFeed) => {
      res.json({
        _message: 'Feed messsage successfully created!',
        feed: savedFeed,
      });
    }, (error) => {
      logger.error([error]);
      res.json(error);
    });
};

exports.getOne = (req, res) => {
  res.json(req.feed);
};

exports.put = (req, res) => {
  const feed = req.feed;
  const update = req.body;
  update.user = req.user;

  _.merge(feed, update);

  feed.save((error, saved) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        _message: 'Feed message successfully updated!',
        feed: saved,
      });
    }
  });
};

exports.delete = (req, res) => {
  req.feed.remove((error, removed) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        _message: 'Feed message successfully deleted!',
        feed: removed,
      });
    }
  });
};

exports.feedPermissions = (req, res, next) => {
  if (req.user._id.toString() === req.feed.user._id.toString()) {
    next();
  } else {
    res.status(403);
    res.json({
      _message: `Access Forbidden to feed message id: ${req.feed._id}`,
      transaction: null,
    });
  }
};
