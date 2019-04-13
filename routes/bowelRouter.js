const express = require('express');
const app = express();
const BowelRouter = express.Router();

const bowel = require('../models/bowel');

BowelRouter.route('/').get(function (req, res) {
  bowel.find(function (err, bowels){
  if(err){
    console.log(err);
  }
  else {
    res.json(bowels);
  }
});
});

module.exports = BowelRouter;