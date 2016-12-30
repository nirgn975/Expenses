var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true
  },
  coordinates: [Number],
  description: String
});

module.exports = mongoose.model('transactions', TransactionSchema);
