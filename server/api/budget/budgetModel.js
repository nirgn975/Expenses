const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BudgetScheam = new Schema({
  name: String,
  limit: Number,
  currentAmount: Number,
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
});

module.exports = mongoose.model('budget', BudgetScheam);
