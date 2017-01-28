const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  facebook: {
    id: String,
    name: {
      type: String,
      lowercase: true,
    },
    profileImage: {
      type: String,
    },
  },
  twitter: {
    id: String,
    name: {
      type: String,
      lowercase: true,
    },
    profileImage: {
      type: String,
    },
  },
  google: {
    id: String,
    name: {
      type: String,
      lowercase: true,
    },
    profileImage: {
      type: String,
    },
  },
  github: {
    id: String,
    name: {
      type: String,
      lowercase: true,
    },
    profileImage: {
      type: String,
    },
  },
});

module.exports = mongoose.model('user', UserSchema);
