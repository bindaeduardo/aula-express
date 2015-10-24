var express = require('express');
var router = express.Router();

var Controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  Controller.retrieve(req,res);	
  });

router.post('/', function(req, res, next) {
  Controller.create(req,res);	
  });

router.put('/:id', function(req, res, next) {
  Controller.update(req,res);	
  });

router.get('/:id', function(req, res, next) {
  Controller.get(req,res);	
  });

module.exports = router;
