const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config');
const User = require('../api/user/userModel');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new FacebookStrategy({
    clientID: config.secrets.facebookAuth.clientID,
    clientSecret: config.secrets.facebookAuth.clientSecret,
    callbackURL: config.secrets.facebookAuth.callbackURL,
  }, (accessToken, refreshToken, profile, done) => {
    User.find({ id: profile.id }, (err, user) => {
      if (err) { return done(err); }
      console.log(profile);

      if (user.length) {
        done(null, user);
      } else {
        const newUser = {
          provider: profile.provider,
          id: profile.id,
          // firstName: profile.name.givenName,
          // lastName: profile.name.familyName,
          // email: profile.emails.value,
          // profileImage: profile.photos.value,
        };

        User.create(newUser)
          .then((savedUser) => {
            done(null, savedUser);
          }, (error) => {
            done(error);
          });
      }
    });
  }
));
