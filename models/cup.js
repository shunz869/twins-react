const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const cup = new Schema({
  name: String,
  price: String,
  cat :String,
  id:Number,
  imgurl:String
});

module.exports = mongoose.model('cup', cup);