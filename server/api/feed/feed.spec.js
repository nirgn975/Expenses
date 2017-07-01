process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('Feed'), () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

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
            done();
          });
      });
  });

  it('should GET all feed', (done) => {
    chai.request(server)
      .get('/api/feed')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(0);
        done();
      });
  });

  it('should POST a feed message', (done) => {
    const now = new Date();
    const message = {
      date: new Date(now.getFullYear(), now.getMonth() + 2),
      messageTitle: 'Feed message title',
      messageBody: 'This is the message body',
      user: this.user,
    };

    chai.request(server)
      .post('/api/feed')
      .set('token', this.user.token)
      .send(message)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_message').equal('Feed messsage successfully created!');
        res.body.feed.should.have.property('_id');
        res.body.feed.should.have.property('messageTitle');
        res.body.feed.should.have.property('messageBody');
        res.body.feed.should.have.property('user');

        this.feed = res.body.feed;
        done();
      });
  });

  it('should GET a specific feed message', (done) => {
    chai.request(server)
      .get(`/api/feed/${this.feed._id}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_id');
        res.body.should.have.property('messageTitle');
        res.body.should.have.property('messageBody');
        res.body.should.have.property('user');
        done();
      });
  });

  it('should not GET a feed message with none existed id ', (done) => {
    chai.request(server)
      .get('/api/feed/589d608c019e406a7a51fb91')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(404);
        res.body.should.have.property('_message').equal('No feed message with that id: 589d608c019e406a7a51fb91');
        res.body.should.have.property('feed').equal(null);
        done();
      });
  });

  it('should not GET a feed message with the wrong id ', (done) => {
    chai.request(server)
      .get('/api/feed/12345')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(500);
        res.body.should.have.property('_message').equal('Cast to ObjectId failed for value "12345" at path "_id" for model "feed"');
        res.body.should.have.property('name').equal('CastError');
        done();
      });
  });

  it('should GET "Access Forbidden" without a user token', (done) => {
    chai.request(server)
      .get(`/api/feed/${this.feed._id}`)
      .set('token', this.user2.token)
      .end((error, res) => {
        res.should.have.status(403);
        res.body.should.have.property('_message').equal(`Access Forbidden to feed message id: ${this.feed._id}`);
        done();
      });
  });

  it('should PUT a feed message', (done) => {
    this.feed.messageBody = 'this is the new message body';

    chai.request(server)
      .put(`/api/feed/${this.feed._id}`)
      .set('token', this.user.token)
      .send(this.feed)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_message').equal('Feed message successfully updated!');
        res.body.feed.should.be.eql(this.feed);

        this.feed = res.body.feed;
        done();
      });
  });

  it('should DELETE a feed message', (done) => {
    chai.request(server)
      .del(`/api/feed/${this.feed._id}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_message').equal('Feed message successfully deleted!');
        res.body.feed.should.be.a('object');
        done();
      });
  });
});
