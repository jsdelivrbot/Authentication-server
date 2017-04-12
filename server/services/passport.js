const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// The purpose of passport is to hit if we are logged or not



// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT stratgegy
const jwtLogin = new JwtStrategy(jwtOptions, (payload,done)=>{
  // The payload is the jwt encode that we set up on the authentication.js, so we unencrypted
  // done is a callback function
  // I wanna see uf the user ID in the payload Existis on our Database
  // If it dies, call 'done' with that other
  // otherwise, call done without a user object
    User.findById(payload.sub, (err,user)=>{
      if (err){ return done(err,false); }

      if(user){
        done(null,user);
      }
      else{
        done(null,false);
      }

    });
});
// Tell passport to use this strategy

passport.use(jwtLogin);
