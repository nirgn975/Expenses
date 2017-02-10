process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const chalk = require('chalk');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe(chalk.blue('Category'), () => {
  before((done) => {
    // Empty all the collection.
    Object.keys(mongoose.connection.collections).forEach((collectionName) => {
      mongoose.connection.collections[collectionName].remove();
    });

    const user = {
      email: 'nir@galon.io',
      token: '123',
    };

    chai.request(server)
      .post('/api/user')
      .send(user)
      .end((userError, userRes) => {
        this.user = userRes.body.user;
        done();
      });
  });

  it('should GET all categories', (done) => {
    chai.request(server)
      .get('/api/category')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(0);
        done();
      });
  });

  it('should POST a category', (done) => {
    const category = {
      name: 'food',
      icon: 'burger',
    };

    chai.request(server)
      .post('/api/category')
      .set('token', this.user.token)
      .send(category)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Category successfully created!');
        res.body.category.should.have.property('_id');
        res.body.category.should.have.property('name');
        res.body.category.should.have.property('icon');

        this.category = res.body.category;
        done();
      });
  });

  it('should GET a category', (done) => {
    chai.request(server)
      .get(`/api/category/${this.category._id}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('_id');
        res.body.should.have.property('name');
        res.body.should.have.property('icon');
        done();
      });
  });

  it('should not GET a category with none existed id ', (done) => {
    chai.request(server)
      .get('/api/category/589d608c019e406a7a51fb91')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(404);
        res.body.should.have.property('message').equal('No category with that id: 589d608c019e406a7a51fb91');
        res.body.should.have.property('category').equal(null);
        done();
      });
  });

  it('should not GET a category with the wrong id ', (done) => {
    chai.request(server)
      .get('/api/category/12345')
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(500);
        res.body.should.have.property('message').equal('Cast to ObjectId failed for value "12345" at path "_id" for model "category"');
        res.body.should.have.property('name').equal('CastError');
        done();
      });
  });

  it('should PUT a category', (done) => {
    this.category.name = 'drink';

    chai.request(server)
      .put(`/api/category/${this.category._id}`)
      .set('token', this.user.token)
      .send(this.category)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Category successfully updated!');
        res.body.category.should.be.eql(this.category);

        this.category = res.body.category;
        done();
      });
  });

  it('should DELETE a category', (done) => {
    chai.request(server)
      .del(`/api/category/${this.category._id}`)
      .set('token', this.user.token)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').equal('Category successfully deleted!');
        res.body.category.should.be.a('object');
        done();
      });
  });
});
