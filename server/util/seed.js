const Transaction = require('../api/transaction/transactionModel');
const Category = require('../api/category/categoryModel');
const Budget = require('../api/budget/budgetModel');
const User = require('../api/user/userModel');
const Feed = require('../api/feed/feedModel');
const _ = require('lodash');
const logger = require('./logger');
const dummyTransactions = require('./dummyTransactions');
const dummyCategories = require('./dummyCategories');
const dummyBudgets = require('./dummyBudgets');
const dummyUsers = require('./dummyUsers');
const dummyFeed = require('./dummyFeed');

const transactions = dummyTransactions.transactions;
const categories = dummyCategories.categories;
const budgets = dummyBudgets.budgets;
const users = dummyUsers.users;
const feedMessages = dummyFeed.feed;

logger.log(['Seeding the Database']);

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
    category.user = data.users[i % users.length];
    return createDoc(Category, category);
  });

  return Promise.all(newCategories)
    .then((savedCategories) => {
      return _.merge({ categories: savedCategories }, data || {});
    });
};

const createBudgets = (data) => {
  const newBudgets = budgets.map((budget, i) => {
    budget.categories = [data.categories[i % categories.length]];
    budget.users = [data.users[i % users.length]];
    return createDoc(Budget, budget);
  });

  return Promise.all(newBudgets)
    .then((savedBudgets) => {
      return _.merge({ budgets: savedBudgets }, data || {});
    });
};

const createTransactions = (data) => {
  const newTransactions = transactions.map((transaction, i) => {
    transaction.category = data.categories[i % categories.length];
    transaction.user = data.users[i % users.length];
    return createDoc(Transaction, transaction);
  });

  return Promise.all(newTransactions)
    .then((savedTransactions) => {
      return _.merge({ transactions: savedTransactions }, data || {});
    });
};

const createFeed = (data) => {
  const newFeed = feedMessages.map((message, i) => {
    message.user = data.users[i % users.length];
    return createDoc(Feed, message);
  });

  return Promise.all(newFeed)
    .then(() => [`Seeded DB with ${feedMessages.length} Feed messages, ${transactions.length} Transactions, ${categories.length} Categories, ${budgets.length} Budgets, and ${users.length} Users`]);
};


cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createBudgets)
  .then(createTransactions)
  .then(createFeed)
  .then(logger.log.bind([logger]))
  .catch(logger.log.bind([logger]));
