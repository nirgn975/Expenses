const router = require('express').Router();
const userController = require('./userController');

router.route('/')
  .post(userController.post);

module.exports = router;
