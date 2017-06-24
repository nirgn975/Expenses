const router = require('express').Router();
const feedController = require('./feedController');
const userController = require('../user/userController');

router.param('id', feedController.params);

router.route('/')
  .get(userController.getByToken, feedController.get)
  .post(userController.getByToken, feedController.post);

router.route('/:id')
  .get(
    userController.getByToken,
    feedController.feedPermissions,
    feedController.getOne)
  .put(
    userController.getByToken,
    feedController.feedPermissions,
    feedController.put)
  .delete(
    userController.getByToken,
    feedController.feedPermissions,
    feedController.delete);

module.exports = router;
