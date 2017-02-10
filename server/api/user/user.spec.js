process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('User'), () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    done();
  });

  it('should POST a new user', (done) => {
    const user = {
      email: 'nir@galon.io',
      token: '123',
    };

    chai.request(server)
      .post('/api/user')
      .send(user)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('User successfully created!');
        res.body.user.should.have.property('_id');
        res.body.user.should.have.property('email');
        res.body.user.should.have.property('token');
        done();
      });
  });
});
