const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    lowercase: true,
  },
  profileImage: String,
  location: String,
  gender: String,
  facebookId: String,
  twitterId: String,
  googleId: String,
  githubId: String,
});

module.exports = mongoose.model('user', UserSchema);
