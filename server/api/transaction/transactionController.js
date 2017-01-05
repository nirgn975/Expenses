const Transaction = require('./transactionModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.params = (req, res, next, id) => {
  Transaction.findById(id)
  .populate('category')
  .exec()
  .then((transaction) => {
    if (!transaction) {
      next(new Error(`No transaction with that id: ${id}`));
    } else {
      req.transaction = transaction;
      next();
    }
  }, (error) => {
    next(error);
  });
};

exports.get = (req, res, next) => {
  Transaction.find({})
    .then((transactions) => {
      res.json(transactions);
    }, (error) => {
      next(error);
    });
};

exports.post = (req, res, next) => {
  const newTransaction = req.body;

  Transaction.create(newTransaction)
    .then((savedTransaction) => {
      res.json(savedTransaction);
    }, (error) => {
      logger.error([error]);
      next(error);
    });
};

exports.getOne = (req, res, next) => {
  res.json(req.transaction);
};

exports.put = (req, res, next) => {
  const transaction = req.transaction;
  const update = req.body;

  _.merge(transaction, update);

  transaction.save((error, saved) => {
    if (error) {
      next(error);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  req.transaction.remove((error, removed) => {
    if (error) {
      next(error);
    } else {
      res.json(removed);
    }
  });
};
