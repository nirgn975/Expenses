const router = require('express').Router();
const passport = require('passport');
const config = require('../../config/config');

router.route('/facebook')
  .get(passport.authenticate('facebook', { scope: ['email', 'user_location'] }));

router.route('/facebook/callback')
  .get(passport.authenticate('facebook'), (req, res) => {
    if (req.user) {
      res.cookie('userToken', req.user.token);
      res.redirect(`${config.client.url}/home`);
    } else {
      res.redirect(config.client.url);
    }
  });

router.route('/twitter')
  .get(passport.authenticate('twitter'));

router.route('/twitter/callback')
  .get(passport.authenticate('twitter'), (req, res) => {
    if (req.user) {
      res.cookie('userToken', req.user.token);
      res.redirect(`${config.client.url}/home`);
    } else {
      res.redirect(config.client.url);
    }
  });

router.route('/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email', 'address'] }));

router.route('/google/callback')
  .get(passport.authenticate('google'), (req, res) => {
    if (req.user) {
      res.cookie('userToken', req.user.token);
      res.redirect(`${config.client.url}/home`);
    } else {
      res.redirect(config.client.url);
    }
  });

router.route('/github')
  .get(passport.authenticate('github', { scope: ['user:email'] }));

router.route('/github/callback')
  .get(passport.authenticate('github'), (req, res) => {
    if (req.user) {
      res.cookie('userToken', req.user.token);
      res.redirect(`${config.client.url}/home`);
    } else {
      res.redirect(config.client.url);
    }
  });

module.exports = router;
