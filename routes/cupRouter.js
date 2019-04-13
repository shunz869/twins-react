const express = require('express');
const app = express();
const CupRouter = express.Router();

const cup = require('../models/cup');

CupRouter.route('/').get(function (req, res) {
  cup.find(function (err, cups){
  if(err){
    console.log(err);
  }
  else {
    res.json(cups);
  }
});
});

module.exports = CupRouter;