const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
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
    profileFields: ['id', 'emails', 'name', 'picture'],
  }, (accessToken, refreshToken, profile, done) => {
    const newUser = {
      email: profile.emails[0].value,
      facebook: {
        id: profile.id,
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        profileImage: profile.photos[0].value,
        token: accessToken,
      },
    };

    User.update({ email: profile.emails[0].value }, newUser, { upsert: true })
      .then((savedUser) => {
        done(null, { token: accessToken, user: savedUser });
      }, (error) => {
        done(error);
      });
  }));

passport.use(
  new TwitterStrategy({
    consumerKey: config.secrets.twitterAuth.consumerKey,
    consumerSecret: config.secrets.twitterAuth.consumerSecret,
    callbackURL: config.secrets.twitterAuth.callbackURL,
    includeEmail: true,
  }, (accessToken, refreshToken, profile, done) => {
    const newUser = {
      email: profile.emails[0].value,
      twitter: {
        id: profile.id,
        name: profile.displayName,
        profileImage: profile.photos[0].value,
        token: accessToken,
      },
    };

    User.update({ email: profile.email }, newUser, { upsert: true })
      .then((savedUser) => {
        done(null, { token: accessToken, user: savedUser });
      }, (error) => {
        done(error);
      });
  }));

passport.use(
  new GoogleStrategy({
    clientID: config.secrets.googleAuth.clientID,
    clientSecret: config.secrets.googleAuth.clientSecret,
    callbackURL: config.secrets.googleAuth.callbackURL,
  }, (accessToken, refreshToken, profile, done) => {
    const newUser = {
      email: profile.emails[0].value,
      google: {
        id: profile.id,
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        profileImage: profile.photos[0].value,
        token: accessToken,
      },
    };

    User.update({ email: profile.emails[0].value }, newUser, { upsert: true })
      .then((savedUser) => {
        done(null, { token: accessToken, user: savedUser });
      }, (error) => {
        done(error);
      });
  }));
