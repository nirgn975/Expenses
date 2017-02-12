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
  { amount: 54, date: nextMonth, type: 'income', coordinates: [41, -17], description: 'description foo bar 5' },
  { amount: 37, date: nextMonth, type: 'expense', coordinates: [-101, 92], description: 'description foo bar 6' },
  { amount: 258, date: Date.now(), type: 'income', coordinates: [56, 2], description: 'description foo bar 7' },
  { amount: 10, date: nextMonth, type: 'expense', coordinates: [-71, -13], description: 'description foo bar 8' },
  { amount: 7, date: nextMonth, type: 'expense', coordinates: [-71, -13], description: 'description foo bar 9' },
  { amount: 5, date: Date.now(), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 10' },
  { amount: 4.5, date: Date.now(), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 11' },
  { amount: 7000, date: nextMonth, type: 'income', coordinates: [-71, -13], description: 'description foo bar 12' },
  { amount: 5, date: nextMonth, type: 'expense', coordinates: [-71, -12], description: 'description foo bar 13' },
  { amount: 3, date: nextMonth, type: 'expense', coordinates: [-71, -14], description: 'description foo bar 14' },
  { amount: 2, date: nextMonth, type: 'expense', coordinates: [-71, -15], description: 'description foo bar 15' },
  { amount: 44, date: nextMonth, type: 'expense', coordinates: [-72, -15], description: 'description foo bar 16' },
  { amount: 23, date: nextMonth, type: 'expense', coordinates: [-73, -15], description: 'description foo bar 17' },
  { amount: 17, date: nextMonth, type: 'expense', coordinates: [-74, -15], description: 'description foo bar 18' },
  { amount: 62, date: nextMonth, type: 'expense', coordinates: [-75, -15], description: 'description foo bar 19' },
  { amount: 9, date: nextMonth, type: 'expense', coordinates: [-76, -15], description: 'description foo bar 20' },
  { amount: 11, date: Date.now(), type: 'expense', coordinates: [-77, -15], description: 'description foo bar 21' },
  { amount: 24.2, date: Date.now(), type: 'expense', coordinates: [-78, -15], description: 'description foo bar 22' },
  { amount: 12.5, date: Date.now(), type: 'expense', coordinates: [-79, -15], description: 'description foo bar 23' },
  { amount: 9.1, date: Date.now(), type: 'expense', coordinates: [-80, -15], description: 'description foo bar 24' },
  { amount: 99.9, date: Date.now(), type: 'expense', coordinates: [-77, -16], description: 'description foo bar 25' },
  { amount: 14, date: Date.now(), type: 'expense', coordinates: [-77, -17], description: 'description foo bar 26' },
  { amount: 76, date: Date.now(), type: 'expense', coordinates: [-77, -18], description: 'description foo bar 27' },
  { amount: 1.4, date: Date.now(), type: 'expense', coordinates: [-77, -19], description: 'description foo bar 28' },
  { amount: 43.2, date: Date.now(), type: 'expense', coordinates: [-77, -20], description: 'description foo bar 29' },
  { amount: 78.6, date: Date.now(), type: 'expense', coordinates: [-77, -21], description: 'description foo bar 30' },
  { amount: 11.78, date: Date.now(), type: 'expense', coordinates: [-74, -12], description: 'description foo bar 31' },
  { amount: 1.73, date: Date.now(), type: 'expense', coordinates: [-75, -12], description: 'description foo bar 32' },
  { amount: 4, date: Date.now(), type: 'expense', coordinates: [-77, -12], description: 'description foo bar 33' },
  { amount: 4.4, date: Date.now(), type: 'expense', coordinates: [-78, -12], description: 'description foo bar 34' },
  { amount: 34, date: Date.now(), type: 'expense', coordinates: [-79, -12], description: 'description foo bar 35' },
  { amount: 56.4, date: Date.now(), type: 'expense', coordinates: [-80, -12], description: 'description foo bar 36' },
  { amount: 5.6, date: Date.now(), type: 'expense', coordinates: [-77, -11], description: 'description foo bar 37' },
  { amount: 7.2, date: Date.now(), type: 'expense', coordinates: [-77, -10], description: 'description foo bar 38' },
  { amount: 81.9, date: Date.now(), type: 'expense', coordinates: [-65, -19], description: 'description foo bar 39' },
  { amount: 6, date: Date.now(), type: 'expense', coordinates: [-66, -12], description: 'description foo bar 40' },
];

const categories = [
  { name: 'Salary', icon: 'account_balance' },
  { name: 'Food', icon: 'shopping_cart' },
  { name: 'Packages', icon: 'local_shipping' },
  { name: 'Shopping', icon: 'shopping_cart' },
  { name: 'Bar', icon: 'local_bar' },
  { name: 'Business', icon: 'business' },
  { name: 'Car', icon: 'directions_car' },
  { name: 'Public Transportation', icon: 'directions_bus' },
  { name: 'Restaurant', icon: 'restaurant' },
  { name: 'Movies', icon: 'theaters' },
  { name: 'Gas', icon: 'local_gas_station' },
  { name: 'Cafe', icon: 'local_cafe' },
  { name: 'Taxi', icon: 'local_taxi' },
  { name: 'Hotel', icon: 'local_hotel' },
  { name: 'Florist', icon: 'local_florist' },
  { name: 'Golf', icon: 'golf_course' },
  { name: 'Fitness', icon: 'fitness_center' },
  { name: 'Vacation', icon: 'beach_access' },
  { name: 'Cigarette', icon: 'smoking_rooms' },
  { name: 'Board Games', icon: 'casino' },
  { name: 'School', icon: 'school' },
  { name: 'Baby', icon: 'child_care' },
  { name: 'Camera', icon: 'camera_alt' },
  { name: 'Computer', icon: 'computer' },
  { name: 'Smartphone', icon: 'smartphone' },
  { name: 'Headset', icon: 'headset' },
  { name: 'Health', icon: 'favorite' },
  { name: 'Home', icon: 'home' },
  { name: 'Furniture', icon: 'weekend' },
];

const budgets = [
  { name: 'Nir', limit: 5000, currentAmount: 231 },
  { name: 'Adi', limit: 7500, currentAmount: 112 },
  { name: 'Food', limit: 1500, currentAmount: 234.1 },
  { name: 'Gooing Out', limit: 2200, currentAmount: 1450 },
];

const users = [
  { email: 'nir@galon.io', token: '123' },
  { email: 'nirgn975@gmail.com', token: '1234' },
  { email: 'adisaar3@gmail.com', token: '12345' },
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
    budget.user = data.users[i % users.length];
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
    .then(() => ['Seeded DB with 40 Transactions, 29 Categories, 4 Budgets, and 3 Users']);
};


cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createBudgets)
  .then(createTransactions)
  .then(logger.log.bind([logger]))
  .catch(logger.log.bind([logger]));
