const router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/transactions', require('./transaction/transactionRoutes'));
router.use('/category', require('./category/categoryRoutes'));

module.exports = router;
