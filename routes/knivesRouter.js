const express = require('express');
const app = express();
const KniveRouter = express.Router();

const knive = require('../models/knive');

KniveRouter.route('/').get(function (req, res) {
  knive.find(function (err, knives){
  if(err){
    console.log(err);
  }
  else {
    res.json(knives);
  }
});
});

module.exports = KniveRouter;