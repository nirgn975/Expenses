const router = require('express').Router();
const passport = require('passport');

router.route('/facebook')
  .get(passport.authenticate('facebook'));

// router.route('/facebook/callback')
//   .get(passport.authenticate('facebook', { successRedirect: 'http://localhost:4200/home', failureRedirect: '/login' }));

router.route('/facebook/callback')
  .get(passport.authenticate('facebook'), (req, res) => {
    if (req.user) {
      res.cookie('userToken', req.user.token);
      res.redirect('http://localhost:4200/home');
    } else {
      res.send(401);
    }
  });

module.exports = router;
