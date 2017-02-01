const router = require('express').Router();
const controller = require('./transactionController');

router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/all-months')
  .get(controller.getMonths);

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

router.route('/:year/:month')
  .get(controller.getByYearAndMonth);

module.exports = router;
