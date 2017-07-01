const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  categories: {
    type: 'array',
    values: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  currentAmount: {
    type: Number,
    defaultValue: 0,
  },
  users: {
    type: 'array',
    values: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    required: true,
  },
  transactions: {
    type: 'array',
    values: {
      type: Schema.Types.ObjectId,
      ref: 'transaction',
    },
  },
});

module.exports = mongoose.model('budget', BudgetSchema);
