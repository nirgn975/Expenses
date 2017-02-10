const router = require('express').Router();
const userController = require('./userController');

router.route('/')
  .put(userController.put)
  .post(userController.post);

router.route('/me')
  .get(userController.getOwn);

module.exports = router;
