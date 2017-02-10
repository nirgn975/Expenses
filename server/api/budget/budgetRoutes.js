const router = require('express').Router();
const budgetController = require('./budgetController');
const userController = require('../user/userController');

router.param('id', budgetController.param);

router.route('/')
  .get(userController.getByToken, budgetController.get)
  .post(userController.getByToken, budgetController.post);

router.route('/:id')
  .get(userController.getByToken, budgetController.getOne)
  .put(userController.getByToken, budgetController.put)
  .delete(userController.getByToken, budgetController.delete);

module.exports = router;
