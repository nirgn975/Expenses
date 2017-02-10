process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('Transaction'), () => {
  let someTransactionId = '';

  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    const category = {
      name: 'Salary',
      icon: 'money',
    };

    const user = {
      email: 'nir@galon.io',
      token: '123',
    };

    const user2 = {
      email: 'nirgn975@gmail.com',
      token: '1234',
    };

    chai.request(server)
      .post('/api/user')
      .send(user)
      .end((user1Error, user1Res) => {
        this.user = user1Res.body.user;

        chai.request(server)
          .post('/api/user')
          .send(user2)
          .end((user2Error, user2Res) => {
            this.user2 = user2Res.body.user;

            chai.request(server)
              .post('/api/category')
              .set('token', this.user.token)
              .send(category)
              .end((error, res) => {
                this.category = res.body.category;
                done();
              });
          });
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
      .set('token', this.user.token)
      .send(transaction)
      .end((transactionPostError, transactionPostRes) => {
        // Get all transactions for this month (zero).
        chai.request(server)
          .get('/api/transaction')
          .set('token', this.user.token)
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
      .set('token', this.user.token)
      .send(transaction)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Transaction successfully created!');
        res.body.transaction.should.have.property('_id');
        res.body.transaction.should.have.property('amount');
        res.body.transaction.should.have.property('type');
        res.body.transaction.should.have.property('coordinates');
        res.body.transaction.should.have.property('category');
        res.body.transaction.should.have.property('description');

        this.transaction = res.body.transaction;
        someTransactionId = res.body.transaction._id;
        done();
      });
  });

  it('should get all transactions months', (done) => {
    chai.request(server)
      .get('/api/transaction/all-months')
      .set('token', this.user.token)
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
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(1);
        done();
      });
  });

  it('should GET a specific transaction', (done) => {
    chai.request(server)
      .get(`/api/transaction/${someTransactionId}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('_id').equal(someTransactionId);
        done();
      });
  });

  it('should not GET a transaction with none existed id ', (done) => {
    chai.request(server)
      .get('/api/transaction/589d608c019e406a7a51fb91')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(404);
        res.body.should.have.property('message').equal('No transaction with that id: 589d608c019e406a7a51fb91');
        res.body.should.have.property('transaction').equal(null);
        done();
      });
  });

  it('should not GET a transaction with the wrong id', (done) => {
    chai.request(server)
      .get('/api/transaction/12345')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('message').equal('No transaction with that id: 12345');
        done();
      });
  });

  it('should GET "Access Forbidden" without a user token', (done) => {
    chai.request(server)
      .get(`/api/transaction/${someTransactionId}`)
      .set('token', this.user2.token)
      .end((error, res) => {
        res.should.have.status(403);
        res.body.should.have.property('message').equal(`Access Forbidden to transaction id: ${someTransactionId}`);
        done();
      });
  });

  it('should PUT a transaction', (done) => {
    this.transaction.amount = 10;

    chai.request(server)
      .put(`/api/transaction/${this.transaction._id}`)
      .set('token', this.user.token)
      .send(this.transaction)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Transaction successfully updated!');
        res.body.transaction.should.be.eql(this.transaction);
        done();
      });
  });

  it('should DELETE a transaction', (done) => {
    chai.request(server)
      .del(`/api/transaction/${this.transaction._id}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Transaction successfully deleted!');
        res.body.transaction.should.be.a('object');
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
      .set('token', this.user.token)
      .send(transactionWithoutAmount)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('transaction validation failed');
        res.body.errors.amount.message.should.equal('Path `amount` is required.');
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
      .set('token', this.user.token)
      .send(transactionWithoutCategory)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('transaction validation failed');
        res.body.errors.category.message.should.equal('Path `category` is required.');
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
      .set('token', this.user.token)
      .send(transactionWithoutType)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('transaction validation failed');
        res.body.errors.type.message.should.equal('Path `type` is required.');
        done();
      });
  });
});
