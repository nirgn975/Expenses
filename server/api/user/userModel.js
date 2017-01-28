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
    profileImage: String,
    location: String,
    gender: String,
  },
  twitter: {
    id: String,
    name: {
      type: String,
      lowercase: true,
    },
    profileImage: String,
    location: String,
  },
  google: {
    id: String,
    name: {
      type: String,
      lowercase: true,
    },
    profileImage: String,
    location: String,
    gender: String,
  },
  github: {
    id: String,
    name: {
      type: String,
      lowercase: true,
    },
    profileImage: String,
    location: String,
  },
});

module.exports = mongoose.model('user', UserSchema);
