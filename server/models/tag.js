const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
