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
    done();
  });

  it('should GET all categories', (done) => {
    chai.request(server)
      .get('/api/category')
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
      .send(category)
      .end((postError, postRes) => {
        postRes.should.have.status(200);
        postRes.body.should.have.property('message').equal('Category successfully created!');
        postRes.body.category.should.have.property('_id');
        postRes.body.category.should.have.property('name');
        postRes.body.category.should.have.property('icon');

        this.category = postRes.body.category;
        done();
      });
  });

  it('should PUT a category', (done) => {
    this.category.name = 'drink';

    chai.request(server)
      .put(`/api/category/${this.category._id}`)
      .send(this.category)
      .end((editCategoryError, editCategoryRes) => {
        editCategoryRes.should.have.status(200);
        editCategoryRes.body.should.have.property('message').equal('Category successfully updated!');
        editCategoryRes.body.category.should.be.eql(this.category);

        this.category = editCategoryRes.body.category;
        done();
      });
  });

  it('should DELETE a category', (done) => {
    chai.request(server)
      .del(`/api/category/${this.category._id}`)
      .send(this.category)
      .end((deletedCategoryError, deletedCategoryRes) => {
        deletedCategoryRes.should.have.status(200);
        deletedCategoryRes.body.should.have.property('message').equal('Category successfully deleted!');
        deletedCategoryRes.body.category.should.be.a('object');
        done();
      });
  });
});
