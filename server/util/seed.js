const Transaction = require('../api/transaction/transactionModel');
const Category = require('../api/category/categoryModel');
const Budget = require('../api/budget/budgetModel');
const User = require('../api/user/userModel');
const _ = require('lodash');
const logger = require('./logger');

logger.log(['Seeding the Database']);

const now = new Date();
const nextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 1);
const transactions = [
  { amount: 23, date: Date.now(), type: 'expense', coordinates: [21, 22], description: 'description foo bar 1' },
  { amount: 54, date: Date.now(), type: 'income', coordinates: [21, 42], description: 'description foo bar 2' },
  { amount: 76, date: Date.now(), type: 'expense', coordinates: [15, 12], description: 'description foo bar 3' },
  { amount: 1009, date: Date.now(), type: 'income', coordinates: [-23, 76], description: 'description foo bar 4' },
  { amount: 101, date: nextMonth, type: 'income', coordinates: [41, -17], description: 'description foo bar 5' },
];

const categories = [
  { name: 'Salary', icon: 'salary' },
  { name: 'Food', icon: 'food' },
  { name: 'Clothing', icon: 'clothing' },
  { name: 'Shopping', icon: 'shopping' },
  { name: 'Going Out', icon: 'shopping' },
];

const budgets = [
  { name: 'nir', limit: 500, currentAmount: 231 },
  { name: 'adi', limit: 750, currentAmount: 112 },
  { name: 'food', limit: 93, currentAmount: 13 },
  { name: 'gooing out', limit: 235, currentAmount: 450 },
];

const users = [
  { email: 'nir@galon.io' },
  { email: 'nirgn975@gmail.com' },
  { email: 'adisaar3@gmail.com' },
];

const cleanDB = () => {
  logger.log(['... cleaning the DB']);
  const cleanPromises = [User, Category, Transaction, Budget]
    .map((model) => {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
};

const createDoc = (Model, doc) => {
  return new Promise((resolve, reject) => {
    new Model(doc).save((err, saved) => {
      return err ? reject(err) : resolve(saved);
    });
  });
};

const createUsers = (data) => {
  const newUsers = users.map((user, i) => {
    return createDoc(User, user);
  });

  return Promise.all(newUsers)
    .then((savedUsers) => {
      return _.merge({ users: savedUsers }, data || {});
    });
};

const createCategories = (data) => {
  const newCategories = categories.map((category, i) => {
    category.user = data.users[i % users.length]._id;
    return createDoc(Category, category);
  });

  return Promise.all(newCategories)
    .then((savedCategories) => {
      return _.merge({ categories: savedCategories }, data || {});
    });
};

const createBudgets = (data) => {
  const newBudgets = budgets.map((budget, i) => {
    budget.categories = [data.categories[i % categories.length]._id];
    budget.user = data.users[i % users.length]._id;
    return createDoc(Budget, budget);
  });

  return Promise.all(newBudgets)
    .then((savedBudgets) => {
      return _.merge({ budgets: savedBudgets }, data || {});
    });
};

const createTransactions = (data) => {
  const newTransactions = transactions.map((transaction, i) => {
    transaction.category = data.categories[i % categories.length]._id;
    transaction.user = data.users[i % users.length]._id;
    return createDoc(Transaction, transaction);
  });

  return Promise.all(newTransactions)
    .then(() => ['Seeded DB with 4 Transactions, 4 Categories, and 4 Budgets']);
};


cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createBudgets)
  .then(createTransactions)
  .then(logger.log.bind([logger]))
  .catch(logger.log.bind([logger]));
