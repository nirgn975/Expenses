process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('Budget'), () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    const category = {
      name: 'Salary',
      icon: 'money',
      color: '#F44336',
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

  it('should GET all budgets', (done) => {
    chai.request(server)
      .get('/api/budget')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(0);
        done();
      });
  });

  it('should POST a budget', (done) => {
    const budget = {
      name: 'Going Out',
      limit: 100,
      currentAmount: 20,
      categories: [this.category],
    };

    chai.request(server)
      .post('/api/budget')
      .set('token', this.user.token)
      .send(budget)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Budget successfully created!');
        res.body.budget.should.have.property('_id');
        res.body.budget.should.have.property('name');
        res.body.budget.should.have.property('limit');
        res.body.budget.should.have.property('currentAmount');
        res.body.budget.should.have.property('categories');

        this.budget = res.body.budget;
        done();
      });
  });

  it('should GET a budget', (done) => {
    chai.request(server)
      .get(`/api/budget/${this.budget._id}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_id');
        res.body.should.have.property('name');
        res.body.should.have.property('limit');
        res.body.should.have.property('currentAmount');
        res.body.should.have.property('categories');
        done();
      });
  });

  it('should not GET a budget with none existed id ', (done) => {
    chai.request(server)
      .get('/api/budget/589d608c019e406a7a51fb91')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(404);
        res.body.should.have.property('message').equal('No budget with that id: 589d608c019e406a7a51fb91');
        res.body.should.have.property('budget').equal(null);
        done();
      });
  });

  it('should not GET a budget with the wrong id ', (done) => {
    chai.request(server)
      .get('/api/budget/12345')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(500);
        res.body.should.have.property('message').equal('Cast to ObjectId failed for value "12345" at path "_id" for model "budget"');
        res.body.should.have.property('name').equal('CastError');
        done();
      });
  });

  it('should GET "Access Forbidden" without a user token', (done) => {
    chai.request(server)
      .get(`/api/budget/${this.budget._id}`)
      .set('token', this.user2.token)
      .end((error, res) => {
        res.should.have.status(403);
        res.body.should.have.property('message').equal(`Access Forbidden to budget id: ${this.budget._id}`);
        done();
      });
  });

  it('should PUT a budget', (done) => {
    this.budget.name = 'Going Down';
    this.budget.categories = [this.category];

    chai.request(server)
      .put(`/api/budget/${this.budget._id}`)
      .set('token', this.user.token)
      .send(this.budget)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Budget successfully updated!');

        this.budget.name = this.budget.name.toLowerCase();
        res.body.budget.should.be.eql(this.budget);
        done();
      });
  });

  it('should DELETE a budget', (done) => {
    chai.request(server)
      .del(`/api/budget/${this.budget._id}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Budget successfully deleted!');
        res.body.budget.should.be.a('object');
        done();
      });
  });

  it('should not POST a budget without a name', (done) => {
    const budget = {
      limit: 100,
      currentAmount: 20,
      categories: [this.category],
    };

    chai.request(server)
      .post('/api/budget')
      .set('token', this.user.token)
      .send(budget)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('budget validation failed');
        console.log('body', res.body.message);
        res.body.errors.name.message.should.equal('Path `name` is required.');
        console.log('error', res.body.errors.name.message);
        done();
      });
  });

  it('should not POST a budget without a limit', (done) => {
    const budget = {
      name: 'Clothing',
      currentAmount: 20,
      categories: [this.category],
    };

    chai.request(server)
      .post('/api/budget')
      .set('token', this.user.token)
      .send(budget)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('budget validation failed');
        res.body.errors.limit.message.should.equal('Path `limit` is required.');
        done();
      });
  });

  it('should not POST a budget without categories', (done) => {
    const budget = {
      name: 'Clothing',
      limit: 120,
    };

    chai.request(server)
      .post('/api/budget')
      .set('token', this.user.token)
      .send(budget)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('budget validation failed');
        res.body.errors.categories.message.should.equal('Path `categories` is required.');
        done();
      });
  });
});
