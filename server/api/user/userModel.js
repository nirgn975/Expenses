const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  provider: {
    type: String,
    required: true,
  },
  facebookId: String,
  twitterId: String,
  googleId: String,
  githubId: String,
  facebook: {
    token: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      lowercase: true,
    },
    lastName: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    gender: {
      type: String,
      lowercase: true,
    },
    profileImage: {
      type: String,
    },
  },
  twitter: {

  },
  google: {

  },
  github: {

  },
});

module.exports = mongoose.model('user', UserSchema);
