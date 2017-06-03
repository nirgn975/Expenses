const Category = require('./categoryModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.param = (req, res, next, id) => {
  Category.findById(id)
    .exec()
    .then((category) => {
      if (!category) {
        res.status(404);
        res.json({
          _message: `No category with that id: ${id}`,
          category: null,
        });
      } else {
        req.category = category;
        next();
      }
    }, (error) => {
      res.status(500);
      error._message = error.message;
      res.json(error);
    });
};

exports.get = (req, res) => {
  Category.find({})
    .then((categories) => {
      res.json(categories);
    }, (error) => {
      res.json(error);
    });
};

exports.post = (req, res) => {
  const newCategory = req.body;
  newCategory.user = req.user;

  Category.create(newCategory)
    .then((savedCategory) => {
      res.json({
        _message: 'Category successfully created!',
        category: savedCategory,
      });
    }, (error) => {
      logger.error([error]);
      res.json(error);
    });
};

exports.getOne = (req, res) => {
  res.json(req.category);
};

exports.put = (req, res) => {
  const category = req.category;
  const update = req.body;
  update.user = req.user;

  _.merge(category, update);

  category.save((error, saved) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        _message: 'Category successfully updated!',
        category: saved,
      });
    }
  });
};

exports.delete = (req, res) => {
  req.category.remove((error, removed) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        _message: 'Category successfully deleted!',
        category: removed,
      });
    }
  });
};

exports.categoryPermissions = (req, res, next) => {
  if (req.user._id.toString() === req.category.user.toString()) {
    next();
  } else {
    res.status(403);
    res.json({
      _message: `Access Forbidden to category id: ${req.category._id}`,
      category: null,
    });
  }
};
