const router = require('express').Router();
const controller = require('./transactionController');
const userController = require('../user/userController');

router.param('id', controller.params);

router.route('/')
  .get(userController.getByToken, controller.get)
  .post(userController.getByToken, controller.post);

router.route('/all-months')
  .get(userController.getByToken, controller.getMonths);

router.route('/:id')
  .get(userController.getByToken, controller.getOne)
  .put(userController.getByToken, controller.put)
  .delete(userController.getByToken, controller.delete);

router.route('/:year/:month')
  .get(userController.getByToken, controller.getByYearAndMonth);

module.exports = router;
