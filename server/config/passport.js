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
    profileFields: ['id', 'emails', 'name', 'picture', 'gender'],
  }, (accessToken, refreshToken, profile, done) => {
    User.find({ facebookId: profile.id }, (err, user) => {
      if (err) { return done(err); }

      if (user.length) {
        done(null, { token: accessToken, user });
      } else {
        const newUser = {
          provider: profile.provider,
          facebookId: profile.id,
          facebook: {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            gender: profile.gender,
            profileImage: profile.photos[0].value,
            token: accessToken,
          },
        };

        User.create(newUser)
          .then((savedUser) => {
            done(null, { token: accessToken, user: savedUser });
          }, (error) => {
            done(error);
          });
      }
    });
  }));
