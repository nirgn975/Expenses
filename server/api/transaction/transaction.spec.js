process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Transaction', () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].drop();
    });

    const category = {
      name: 'Salary',
      icons: 'salary',
    };

    chai.request(server)
      .post('/api/category')
      .send(category)
      .end((categoryError, categoryRes) => {
        this.category = categoryRes.body;
        done();
      });
  });

  it('should GET all transactions', (done) => {
    chai.request(server)
      .get('/api/transaction')
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(0);
        done();
      });
  });

  it('should POST a transaction', (done) => {
    const transaction = {
      amount: 23,
      date: Date.now(),
      type: 'expense',
      coordinates: [21, 22],
      category: this.category._id,
      description: 'description foo bar 1',
    };

    chai.request(server)
      .post('/api/transaction')
      .send(transaction)
      .end((transactionError, transactionRes) => {
        transactionRes.should.have.status(200);
        transactionRes.body.should.have.property('message').equal('Transaction successfully created!');
        transactionRes.body.transaction.should.have.property('amount');
        transactionRes.body.transaction.should.have.property('type');
        transactionRes.body.transaction.should.have.property('coordinates');
        transactionRes.body.transaction.should.have.property('category');
        transactionRes.body.transaction.should.have.property('description');

        this.transaction = transactionRes.body.transaction;
        done();
      });
  });

  it('should PUT a transaction', (done) => {
    const changedTransaction = this.transaction;
    changedTransaction.amount = 10;

    chai.request(server)
      .put(`/api/transaction/${changedTransaction._id}`)
      .send(changedTransaction)
      .end((editTransactionError, editTransactionRes) => {
        editTransactionRes.should.have.status(200);
        editTransactionRes.body.should.have.property('message').equal('Transaction successfully updated!');
        editTransactionRes.body.transaction.should.be.eql(changedTransaction);
        done();
      });
  });

  it('should DELETE a transaction', (done) => {
    const transactionToDelete = this.transaction;

    chai.request(server)
      .del(`/api/transaction/${transactionToDelete._id}`)
      .send(transactionToDelete)
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
