const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  coordinates: [Number],
  date: {
    type: Date,
    defaultValue: Date.now(),
    required: true,
  },
  description: {
    type: String,
    lowercase: true,
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  shared_with: {
    type: 'array',
    values: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
});

module.exports = mongoose.model('transaction', TransactionSchema);
