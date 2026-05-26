const mongoose = require('mongoose');
const schema = mongoose.Schema;

const photoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },

  imageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Photo = mongoose.model('Photo', photoSchema);  
module.exports = Photo;