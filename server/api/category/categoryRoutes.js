const router = require('express').Router();
const categoryController = require('./categoryController');
const userController = require('../user/userController');

router.param('id', categoryController.param);

router.route('/')
  .get(userController.getByToken, categoryController.get)
  .post(userController.getByToken, categoryController.post);

router.route('/:id')
  .get(userController.getByToken, categoryController.getOne)
  .put(userController.getByToken, categoryController.put)
  .delete(userController.getByToken, categoryController.delete);

module.exports = router;
