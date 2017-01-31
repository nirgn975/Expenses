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

exports.get = (req, res) => {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  Transaction.find({
    date: {
      $gt: firstDay,
      $lt: lastDay,
    } })
    .then((transactions) => {
      res.json(transactions);
    }, (error) => {
      res.json(error);
    });
};

exports.post = (req, res) => {
  const newTransaction = req.body;

  Transaction.create(newTransaction)
    .then((savedTransaction) => {
      res.json({
        message: 'Transaction successfully created!',
        transaction: savedTransaction,
      });
    }, (error) => {
      logger.error([error]);
      res.json(error);
    });
};

exports.getOne = (req, res) => {
  res.json(req.transaction);
};

exports.put = (req, res) => {
  const transaction = req.transaction;
  const update = req.body;

  _.merge(transaction, update);

  transaction.save((error, saved) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        message: 'Transaction successfully updated!',
        transaction: saved,
      });
    }
  });
};

exports.delete = (req, res) => {
  req.transaction.remove((error, removed) => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        message: 'Transaction successfully deleted!',
        transaction: removed,
      });
    }
  });
};
