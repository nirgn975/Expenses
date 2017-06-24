const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedSchema = new Schema({
  date: {
    type: Date,
    defaultValue: Date.now(),
    required: true,
  },
  message_title: {
    type: String,
    lowercase: true,
  },
  message_body: {
    type: String,
    lowercase: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

module.exports = mongoose.model('feed', FeedSchema);
