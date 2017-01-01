const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icons: {
    type: String,
    required: true,
  },
  // user {
  //   type: Schema.Types.ObjectId,
  //   ref: 'users'
  // }
});

module.exports = mongoose.model('category', CategorySchema);
