const Category = require('./categoryModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.param = (req, res, next, id) => {
  Category.findById(id)
    .exec()
    .then((category) => {
      if (!category) {
        next(new Error(`No category with that id: ${id}`));
      } else {
        req.category = category;
        next();
      }
    }, (error) => {
      next(error);
    });
};

exports.get = (req, res, next) => {
  Category.find({})
    .then((categories) => {
      res.json(categories);
    }, (error) => {
      next(error);
    });
};

exports.post = (req, res, next) => {
  const newCategory = req.body;

  Category.create(newCategory)
    .then((savedCategory) => {
      res.json(savedCategory);
    }, (error) => {
      logger.error(error);
      next(error);
    });
};

exports.getOne = (req, res, next) => {
  res.json(req.category);
};

exports.put = (req, res, next) => {
  const category = req.category;
  const update = req.body;

  _.merge(category, update);

  category.save((error, saved) => {
    if (error) {
      next(error);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  const category = req.category;

  category.delete((error, removed) => {
    if (error) {
      next(error);
    } else {
      next(removed);
    }
  });
};
