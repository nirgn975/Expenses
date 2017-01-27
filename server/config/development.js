module.exports = {
  logging: true, // enabled logging for development.
  seed: true,
  db: {
    url: 'mongodb://localhost/expenses',
  },
  client: {
    url: 'http://localhost:4200',
  },
};
