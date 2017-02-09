const Budget = require('./budgetModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.param = (req, res, next, id) => {
  Budget.findById(id)
    .populate('categories')
    .exec()
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

exports.get = (req, res) => {
  Budget.find({})
    .then((budgets) => {
      res.json(budgets);
    }, (error) => {
      res.json(error);
    });
};

exports.post = (req, res) => {
  let newBudget = req.body;
  newBudget.user = req.user;

  // console.log(newBudget);

  Budget.create(newBudget)
    .then((savedBudget) => {
      res.json({
        message: 'Budget successfully created!',
        budget: savedBudget,
      });
    }, (error) => {
      logger.error([error]);
      res.json(error);
    });
};

exports.getOne = (req, res) => {
  res.json(req.budget);
};

exports.put = (req, res) => {
  const budget = req.budget;
  let update = req.body;
  update.user = req.user;

  _.merge(budget, update);

  budget.save((error, saved) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        message: 'Budget successfully updated!',
        budget: saved,
      });
    }
  });
};

exports.delete = (req, res) => {
  req.budget.remove((error, removed) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        message: 'Budget successfully deleted!',
        budget: removed,
      });
    }
  });
};
