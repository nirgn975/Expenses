process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const nock = require('nock');
const server = require('../../server');
const User = require('../user/userModel');

const should = chai.should();

chai.use(chaiHttp);

function nockAPI(nockRef) {
  // Intercept `https://api.github.com/user` API Call.
  nockRef('https://api.github.com')
    .filteringPath(/\/user.+/, '/user')
    .get('/user')
    .reply(200, {
      id: 1,
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      name: 'monalisa octocat',
      location: 'San Francisco',
      email: 'octocat@github.com',
    });
}

describe(chalk.blue('Auth'), () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    nockAPI(nock);
    done();
  });

  it('should redirect to facebook.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/facebook')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/www.facebook.com\/dialog\/oauth/);
        done();
      });
  });

  it('should redirect to twitter.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/twitter')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/api.twitter.com\/oauth\/authenticate/);
        done();
      });
  });

  it('should redirect to google.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/google')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/accounts.google.com\/o\/oauth2\/v2\/auth/);
        done();
      });
  });

  it('should redirect to github.com login page', (done) => {
    chai.request(server)
      .get('/api/auth/github')
      .redirects(0)
      .end((err, res) => {
        res.should.have.status(302);
        res.headers.location.should.be.match(/^https:\/\/github.com\/login\/oauth\/authorize/);
        done();
      });
  });

  it('should get a token and create a new user in github callback', (done) => {
    const agent = chai.request.agent(server);
    agent.get('/api/auth/github/callback')
      .query({ code: '12345' })
      .end((err, res) => {
        const cookie = res.req.connection._httpMessage._headers.cookie;
        cookie.should.be.match(/userToken/);

        // Check the user has created.
        User.find({})
          .then((users) => {
            users.length.should.be.equal(1);
          }, (error) => {
            console.log(error);
          });

        done();
      });
  });
});
