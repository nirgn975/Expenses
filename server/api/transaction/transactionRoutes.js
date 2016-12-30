var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./transactionController');

router.route('/')
  .get(controller.get);

module.exports = router;
