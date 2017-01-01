const Transaction = require('./transactionModel');
const _ = require('lodash');

exports.get = (req, res, next) => {
  Transaction.find({})
    .then((transactions) => {
      res.json(transactions);
    }, (err) => {
      next(err);
    });
};

exports.getOne = (req, res, next) => {
  console.log('in getOne transaction');
  next();
};

exports.post = (req, res, next) => {
  console.log('in post transaction');
  next();
};

exports.put = (req, res, next) => {
  console.log('in put transaction');
  next();
};

exports.delete = (req, res, next) => {
  console.log('in delete transaction');
  next();
};
