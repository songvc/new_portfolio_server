import jwt from 'jwt-simple';
import User from '../models/user';
import secret from '../config';

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

const signin = (req, res, next) => {
  //User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

const signup = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email or password'});
  }

  // See if a user with the given email exist
  User.findOne({ email: email }, function(err, existingUser) {

    if (err) { return next(err); }
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use'});
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }
      // Respond to request indicating the user was created
      res.json( { token: tokenForUser(user) });
    });

  })
}

export default { signin, signup };
