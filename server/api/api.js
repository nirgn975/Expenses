const router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/transaction', require('./transaction/transactionRoutes'));
router.use('/category', require('./category/categoryRoutes'));
router.use('/budget', require('./budget/budgetRoutes'));
router.use('/user', require('./user/userRoutes'));
router.use('/auth', require('./auth/authRoutes'));

module.exports = router;
