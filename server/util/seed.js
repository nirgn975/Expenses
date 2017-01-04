const Transaction = require('../api/transaction/transactionModel');
const Category = require('../api/category/categoryModel');
const _ = require('lodash');
const logger = require('./logger');

logger.log('Seeding the Database');

const transactions = [
  {amount: 23, date: Date.now(), type: 'expense', coordinates: [21, 22], description: 'description foo bar 1'},
  {amount: 54, date: Date.now(), type: 'income', coordinates: [21, 42], description: 'description foo bar 2'},
  {amount: 76, date: Date.now(), type: 'expense', coordinates: [15, 12], description: 'description foo bar 3'},
  {amount: 1009, date: Date.now(), type: 'income', coordinates: [-23, 76], description: 'description foo bar 4'},
];

const categories = [
  {name: 'Salary', icons: 'salary'},
  {name: 'Food', icons: 'food'},
  {name: 'Clothing', icons: 'clothing'},
  {name: 'Shopping', icons: 'shopping'},
];

const cleanDB = function() {
  logger.log('... cleaning the DB');
    const cleanPromises = [Category, Transaction]
    .map((model) => {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
};

const createDoc = (model, doc) => {
  return new Promise((resolve, reject) => {
    new model(doc).save((err, saved) => {
      return err ? reject(err) : resolve(saved);
    });
  });
};

const createCategories = (data) => {
  const promises = categories.map((category) => {
      return createDoc(Category, category);
  });

  return Promise.all(promises)
      .then((categories) => {
          return _.merge({categories: categories}, data || {});
      });
};

const createTransactions = (data) => {
  const addCategory = (transaction, category) => {
    transaction.category.push(category);

    return new Promise((resolve, reject) => {
      transaction.save((err, saved) => {
        return err ? reject(err) : resolve(saved);
      });
    });
  };

  const newTransactions = transactions.map((transaction, i) => {
    transaction.category = data.categories[i]._id;
    return createDoc(Transaction, transaction);
  });

  return Promise.all(newTransactions)
    .then(function() {
      return 'Seeded DB with 3 Transactions 3 Categories';
    });
};


cleanDB()
  .then(createCategories)
  .then(createTransactions)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
