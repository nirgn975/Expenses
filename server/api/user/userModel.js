var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  someID: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model('users', User);
