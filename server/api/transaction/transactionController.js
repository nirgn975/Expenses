var Transaction = require('./transactionModel');
var _ = require('lodash');

exports.get = function(req, res, next) {
  Transaction.find({})
    .then(function(transactions){
      res.json(transactions);
    }, function(err){
      next(err);
    });
};
