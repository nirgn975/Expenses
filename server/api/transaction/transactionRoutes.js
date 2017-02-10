const router = require('express').Router();
const transactionController = require('./transactionController');
const userController = require('../user/userController');

router.param('id', transactionController.params);

router.route('/')
  .get(userController.getByToken, transactionController.get)
  .post(userController.getByToken, transactionController.post);

router.route('/all-months')
  .get(userController.getByToken, transactionController.getMonths);

router.route('/:id')
  .get(
    userController.getByToken,
    transactionController.transactionPermissions,
    transactionController.getOne)
  .put(
    userController.getByToken,
    transactionController.transactionPermissions,
    transactionController.put)
  .delete(
    userController.getByToken,
    transactionController.transactionPermissions,
    transactionController.delete);

router.route('/:year/:month')
  .get(userController.getByToken, transactionController.getByYearAndMonth);

module.exports = router;
