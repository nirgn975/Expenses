process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('Auth'), () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    done();
  });

  it('it should redirect to facebook.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/facebook')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/www.facebook.com\/dialog\/oauth/);
        done();
      });
  });

  it('it should redirect to twitter.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/twitter')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/api.twitter.com\/oauth\/authenticate/);
        done();
      });
  });

  it('it should redirect to google.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/google')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/accounts.google.com\/o\/oauth2\/v2\/auth/);
        done();
      });
  });

  it('it should redirect to github.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/github')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/github.com\/login\/oauth\/authorize/);
        done();
      });
  });
});
