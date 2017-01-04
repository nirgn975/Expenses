const Budget = require('./budgetModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.param = (res, req, next, id) => {
  Budget.findById(id)
    .populate('categories')
    .then((budget) => {
      if (!budget) {
        next(new Error(`No budget with that id: ${id}`));
      } else {
        req.budget = budget;
        next();
      }
    }, (error) => {
      next(error);
    });
};

exports.get = (res, req, next) => {
  Budget.find({})
    .then((budgets) => {
      res.json(budgets);
    }, (error) => {
      next(error);
    });
};

exports.post = (res, req, next) => {
  const newBudget = req.body;

  Budget.create(newBudget)
    .then((savedBudget) => {
      res.json(savedBudget);
    }, (error) => {
      logger.error(error);
      next(error);
    });
};

exports.getOne = (res, req, next) => {
  res.json(req.budget);
};

exports.put = (res, req, next) => {
  const budget = req.budget;
  const update = req.body;

  _.merge(budget, update);

  budget.save((error, saved) => {
    if (error) {
      next(error);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (res, req, next) => {
  const budget = req.body;

  budget.delete((error, removed) => {
    if (error) {
      next(error);
    } else {
      res.json(removed);
    }
  });
};
