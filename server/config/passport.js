const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
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
    profileFields: ['id', 'emails', 'name', 'picture', 'location', 'gender'],
  }, (accessToken, refreshToken, profile, done) => {
    const newUser = {
      email: profile.emails[0].value,
      token: accessToken,
      facebookId: profile.id,
      name: `${profile.name.givenName} ${profile.name.familyName}`,
      profileImage: profile.photos[0].value,
      location: profile._json.location.name,
      gender: profile.gender,
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
      token: accessToken,
      twitterId: profile.id,
      name: profile.displayName,
      profileImage: profile.photos[0].value,
      location: profile._json.location,
    };

    User.update({ email: profile.emails[0].value }, newUser, { upsert: true })
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
      token: accessToken,
      googleId: profile.id,
      name: `${profile.name.givenName} ${profile.name.familyName}`,
      profileImage: profile.photos[0].value,
      location: profile._json.placesLived[0].value,
      gender: profile.gender,
    };

    User.update({ email: profile.emails[0].value }, newUser, { upsert: true })
      .then((savedUser) => {
        done(null, { token: accessToken, user: savedUser });
      }, (error) => {
        done(error);
      });
  }));

passport.use(
  new GithubStrategy({
    clientID: config.secrets.githubAuth.clientID,
    clientSecret: config.secrets.githubAuth.clientSecret,
    callbackURL: config.secrets.githubAuth.callbackURL,
  }, (accessToken, refreshToken, profile, done) => {
    const newUser = {
      email: profile.emails[0].value,
      token: accessToken,
      githubId: profile.id,
      name: profile.displayName,
      profileImage: profile._json.avatar_url,
      location: profile._json.location,
    };

    User.update({ email: profile.emails[0].value }, newUser, { upsert: true })
      .then((savedUser) => {
        done(null, { token: accessToken, user: savedUser });
      }, (error) => {
        done(error);
      });
  }));
