const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const knive = new Schema({
  name: String,
  price: String,
  cat :String,
  id:Number,
  imgurl:String
});

module.exports = mongoose.model('knive', knive);