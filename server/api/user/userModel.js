const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};


const UserSchema = new Schema({
  provider: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    // required: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    // required: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    // required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
  },
  profileImage: String,
});

module.exports = mongoose.model('user', UserSchema);
