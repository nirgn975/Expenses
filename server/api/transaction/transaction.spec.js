process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('Transaction'), () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    const category = {
      name: 'Salary',
      icon: 'money',
    };

    chai.request(server)
      .post('/api/category')
      .send(category)
      .end((categoryError, categoryRes) => {
        this.category = categoryRes.body.category;
        done();
      });
  });

  it('should GET all transactions for current month', (done) => {
    const now = new Date();
    const transaction = {
      amount: 1000,
      date: new Date(now.getFullYear(), now.getMonth() + 2),
      type: 'income',
      coordinates: [-17, 48],
      category: this.category._id,
      description: 'description foo bar 1',
    };

    // Add a new transaction for next month.
    chai.request(server)
      .post('/api/transaction')
      .send(transaction)
      .end((transactionPostError, transactionPostRes) => {

        // Get all transactions for this month (zero).
        chai.request(server)
          .get('/api/transaction')
          .end((error, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.equal(0);
            done();
          });
      });
  });

  it('should POST a transaction', (done) => {
    const transaction = {
      amount: 23,
      date: Date.now(),
      type: 'expense',
      coordinates: [21, 22],
      category: this.category._id,
      description: 'description foo bar 2',
    };

    chai.request(server)
      .post('/api/transaction')
      .send(transaction)
      .end((transactionPostError, transactionPostRes) => {
        transactionPostRes.should.have.status(200);
        transactionPostRes.body.should.have.property('message').equal('Transaction successfully created!');
        transactionPostRes.body.transaction.should.have.property('_id');
        transactionPostRes.body.transaction.should.have.property('amount');
        transactionPostRes.body.transaction.should.have.property('type');
        transactionPostRes.body.transaction.should.have.property('coordinates');
        transactionPostRes.body.transaction.should.have.property('category');
        transactionPostRes.body.transaction.should.have.property('description');

        this.transaction = transactionPostRes.body.transaction;
        done();
      });
  });

  it('should get all transactions months', (done) => {
    chai.request(server)
      .get('/api/transaction/all-months')
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(2);
        done();
      });
  });

  it('should get all transactions for next month', (done) => {
    const now = new Date();
    chai.request(server)
      .get(`/api/transaction/${now.getFullYear()}/${now.getMonth() + 2}`)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(1);
        done();
      });
  });

  it('should PUT a transaction', (done) => {
    this.transaction.amount = 10;

    chai.request(server)
      .put(`/api/transaction/${this.transaction._id}`)
      .send(this.transaction)
      .end((editTransactionError, editTransactionRes) => {
        editTransactionRes.should.have.status(200);
        editTransactionRes.body.should.have.property('message').equal('Transaction successfully updated!');
        editTransactionRes.body.transaction.should.be.eql(this.transaction);
        done();
      });
  });

  it('should DELETE a transaction', (done) => {
    chai.request(server)
      .del(`/api/transaction/${this.transaction._id}`)
      .end((deletedTransactionError, deletedTransactionRes) => {
        deletedTransactionRes.should.have.status(200);
        deletedTransactionRes.body.should.have.property('message').equal('Transaction successfully deleted!');
        deletedTransactionRes.body.transaction.should.be.a('object');
        done();
      });
  });

  it('should not POST a transaction without an amount', (done) => {
    const transactionWithoutAmount = {
      date: Date.now(),
      type: 'expense',
      coordinates: [21, 22],
      category: this.category._id,
      description: 'description foo bar 1',
    };

    chai.request(server)
      .post('/api/transaction')
      .send(transactionWithoutAmount)
      .end((amountTransactionError, amountTransactionRes) => {
        amountTransactionRes.should.have.status(200);
        amountTransactionRes.body.should.have.property('message').equal('transaction validation failed');
        amountTransactionRes.body.errors.amount.message.should.equal('Path `amount` is required.');
        done();
      });
  });

  it('should not POST a transaction without a category', (done) => {
    const transactionWithoutCategory = {
      amount: 23,
      date: Date.now(),
      type: 'expense',
      coordinates: [21, 22],
      description: 'description foo bar 1',
    };

    chai.request(server)
      .post('/api/transaction')
      .send(transactionWithoutCategory)
      .end((categoryTransactionError, categoryTransactionRes) => {
        categoryTransactionRes.should.have.status(200);
        categoryTransactionRes.body.should.have.property('message').equal('transaction validation failed');
        categoryTransactionRes.body.errors.category.message.should.equal('Path `category` is required.');
        done();
      });
  });

  it('should not POST a transaction without a type', (done) => {
    const transactionWithoutType = {
      amount: 23,
      date: Date.now(),
      coordinates: [21, 22],
      category: this.category._id,
      description: 'description foo bar 1',
    };

    chai.request(server)
      .post('/api/transaction')
      .send(transactionWithoutType)
      .end((typeTransactionError, typeTransactionRes) => {
        typeTransactionRes.should.have.status(200);
        typeTransactionRes.body.should.have.property('message').equal('transaction validation failed');
        typeTransactionRes.body.errors.type.message.should.equal('Path `type` is required.');
        done();
      });
  });
});
