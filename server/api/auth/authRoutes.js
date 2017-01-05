const router = require('express').Router();
const passport = require('passport');

router.route('/facebook')
  .get(passport.authenticate('facebook', { scope: 'email' }));

router.route('/facebook/callback')
  .get(passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;
