const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  currentAmount: {
    type: Number,
    defaultValue: 0,
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  }],
});

module.exports = mongoose.model('budget', BudgetSchema);
