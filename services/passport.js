import passport from 'passport';
import User from '../models/user';
import config from '../config';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';

const JwtStrategy = Strategy;

// the whole strategy
// signing up -> verify email is not in use -> token
// signing in -> verify email/password -> token
// auth'd request -> verify token -> resource access

// Create a local strategy
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this username and password, call done with the user
  // if it is the correct username and password
  // otherwise, call done with false
  User.findOne({ email: email }, function(err, user){
    if (err) { return done(err); }
    if (!user) { return done(null,  false);}

    //compare password - is 'password' equal to user.password?
    User.comparePassword(password, function(err, isMatch){
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }
      return done(null, user);
    })
  })
})


// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }

  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
