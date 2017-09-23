
var passport = require('passport');
var keys = require('../config/key');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var { User }  = require('../models/user');
passport.serializeUser(function(user, done) {
    done(null, user.id);
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleAppId,
    clientSecret: keys.googleSecret,
    callbackURL: "/auth/google/callback",
    proxy: true,
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile.id);
     User.findOne({googleId: profile.id}).then((user) => {
         if(user){
            done(null, user);
         }else{
             var newUser = new User({
                googleId: profile.id
             });
             newUser.save().then((user) => {
                  done(null, user);
             });
         }
     }, (err) =>{
         console.log('--------------'+err);
     });
  }

));

