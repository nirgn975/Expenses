const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    enum: [
      '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3',
      '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
      '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E',
      '#607D8B', '#000000', '#FFFFFF',
    ],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

module.exports = mongoose.model('category', CategorySchema);
