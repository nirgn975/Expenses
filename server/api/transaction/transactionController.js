const Transaction = require('./transactionModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.params = (req, res, next, id) => {
  Transaction.findById(id)
    .populate('category')
    .populate('user')
    .exec()
    .then((transaction) => {
      if (!transaction) {
        res.status(404);
        res.json({
          message: `No transaction with that id: ${id}`,
          transaction: null,
        });
      } else {
        req.transaction = transaction;
        next();
      }
    }, (error) => {
      res.status(500);
      res.json({
        message: `No transaction with that id: ${id}`,
        error,
      });
    });
};

exports.get = (req, res) => {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  Transaction.find({
    date: {
      $gte: firstDay,
      $lte: lastDay,
    },
    user: req.user,
  })
  .then((transactions) => {
    res.json(transactions);
  }, (error) => {
    res.json(error);
  });
};

exports.post = (req, res) => {
  const newTransaction = req.body;
  newTransaction.user = req.user;

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
  update.user = req.user;

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

exports.getMonths = (req, res) => {
  Transaction.aggregate([{
    $match: { user: req.user._id },
  }, {
    $group: {
      _id: { month: { $month: '$date' }, year: { $year: '$date' } },
    },
  }], (error, allMonths) => {
    if (error) {
      res.json(error);
    } else {
      res.json(allMonths.reverse());
    }
  });
};

exports.getByYearAndMonth = (req, res) => {
  const now = new Date(req.params.year, req.params.month - 1);
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  Transaction.find({
    date: {
      $gte: firstDay,
      $lte: lastDay,
    },
    user: req.user,
  })
  .populate('category')
  .populate('user')
  .exec()
  .then((transactions) => {
    res.json(transactions);
  }, (error) => {
    res.json(error);
  });
};

exports.transactionPermissions = (req, res, next) => {
  if (req.user._id.toString() === req.transaction.user._id.toString()) {
    next();
  } else {
    res.status(403);
    res.json({
      message: `Access Forbidden to transaction id: ${req.transaction._id}`,
      transaction: null,
    });
  }
};
