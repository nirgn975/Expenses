const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    defaultValue: Date.now(),
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true,
  },
  coordinates: [Number],
  description: {
    type: String,
    lowercase: true,
  },
});

module.exports = mongoose.model('transaction', TransactionSchema);
