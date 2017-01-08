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

exports.get = (req, res) => {
  Category.find({})
    .then((categories) => {
      res.json(categories);
    }, (error) => {
      res.send(error);
    });
};

exports.post = (req, res) => {
  const newCategory = req.body;

  Category.create(newCategory)
    .then((savedCategory) => {
      res.json({
        message: 'Category successfully created!',
        category: savedCategory,
      });
    }, (error) => {
      logger.error([error]);
      res.send(error);
    });
};

exports.getOne = (req, res) => {
  res.json(req.category);
};

exports.put = (req, res) => {
  const category = req.category;
  const update = req.body;

  _.merge(category, update);

  category.save((error, saved) => {
    if (error) {
      res.send(error);
    } else {
      res.json({
        message: 'Category successfully updated!',
        category: saved,
      });
    }
  });
};

exports.delete = (req, res) => {
  req.category.remove((error, removed) => {
    if (error) {
      res.send(error);
    } else {
      res.json({
        message: 'Category successfully deleted!',
        category: removed,
      });
    }
  });
};
