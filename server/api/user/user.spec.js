process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('User'), () => {
  let user = {
    email: 'nir@galon.io',
    token: '123',
  };

  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    done();
  });

  it('should POST a new user', (done) => {
    chai.request(server)
      .post('/api/user')
      .send(user)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_message').equal('User successfully created!');
        res.body.user.should.have.property('_id');
        res.body.user.should.have.property('email');
        res.body.user.should.have.property('token');
        done();
      });
  });

  it('should GET user info', (done) => {
    chai.request(server)
      .get('/api/user/me')
      .set('token', user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_id');
        res.body.should.have.property('email').equal(user.email);
        res.body.should.have.property('token').equal(user.token);

        // Save the user info
        user = res.body;
        done();
      });
  });

  it('should PUT a user', (done) => {
    user.name = 'nir';

    chai.request(server)
      .put('/api/user/')
      .set('token', user.token)
      .send(user)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_message').equal('User successfully updated!');
        res.body.user.should.be.eql(user);
        done();
      });
  });
});
