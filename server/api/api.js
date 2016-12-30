var router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/transactions', require('./transaction/transactionRoutes'));

module.exports = router;
