const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    lowercase: true,
  },
  token: {
    type: String,
    required: true,
  },
  gender: String,
  location: String,
  profileImage: String,
  facebookId: String,
  twitterId: String,
  googleId: String,
  githubId: String,
  connectedAccounts: {
    type: 'array',
    values: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
});

module.exports = mongoose.model('user', UserSchema);
