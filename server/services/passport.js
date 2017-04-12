const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
// Create local strategy
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, (email,password,done)=>{
    // Verify this username and password , call done with the user if
    // it's the correct username and password
    // otherwise, call it false
    User.findOne({email: email},(err,user)=>{
      if (err) {return done(err);}
      if (!user) {return done(false);}
      // compare passwords - is 'password'equal to user.password?
      user.comparePassword(password,(err,isMatch)=>{
        if(err){return done(err);}
        if(!isMatch){return done(null,false);}
        return done(null,user);
      });
    });
});
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
passport.use(localLogin);
