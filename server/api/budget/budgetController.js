const Budget = require('./budgetModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.param = (req, res, next, id) => {
  Budget.findById(id)
    .populate('categories')
    .exec()
    .then((budget) => {
      if (!budget) {
        res.status(404);
        res.json({
          message: `No budget with that id: ${id}`,
          budget: null,
        });
      } else {
        req.budget = budget;
        next();
      }
    }, (error) => {
      res.status(500);
      res.json(error);
    });
};

exports.get = (req, res) => {
  Budget.find({
    user: req.user,
  })
    .then((budgets) => {
      res.json(budgets);
    }, (error) => {
      res.json(error);
    });
};

exports.post = (req, res) => {
  const newBudget = req.body;
  newBudget.user = req.user;

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
  const update = req.body;
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

exports.budgetPermissions = (req, res, next) => {
  if (req.user._id.toString() === req.budget.user.toString()) {
    next();
  } else {
    res.status(403);
    res.json({
      message: `Access Forbidden to budget id: ${req.budget._id}`,
      budget: null,
    });
  }
};
