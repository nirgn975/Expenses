const router = require('express').Router();
const controller = require('./categoryController');
const userController = require('../user/userController');

router.param('id', controller.param);

router.route('/')
  .get(userController.getByToken, controller.get)
  .post(userController.getByToken, controller.post);

router.route('/:id')
  .get(userController.getByToken, controller.getOne)
  .put(userController.getByToken, controller.put)
  .delete(userController.getByToken, controller.delete);

module.exports = router;
