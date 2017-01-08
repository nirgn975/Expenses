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

exports.get = (res, req) => {
  Budget.find({})
    .then((budgets) => {
      res.json(budgets);
    }, (error) => {
      res.send(error);
    });
};

exports.post = (res, req) => {
  const newBudget = req.body;

  Budget.create(newBudget)
    .then((savedBudget) => {
      res.json(savedBudget);
    }, (error) => {
      logger.error([error]);
      res.send(error);
    });
};

exports.getOne = (res, req) => {
  res.json(req.budget);
};

exports.put = (res, req) => {
  const budget = req.budget;
  const update = req.body;

  _.merge(budget, update);

  budget.save((error, saved) => {
    if (error) {
      res.send(error);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (res, req) => {
  req.body.remove((error, removed) => {
    if (error) {
      res.send(error);
    } else {
      res.json(removed);
    }
  });
};
