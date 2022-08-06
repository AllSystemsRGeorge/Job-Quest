const LocalStrategy = require('passport-local');
const passport = require('passport');
const { Users } = require('./../models');

passport.serializeUser((user, done) => {
  done(null, user.username)
});

passport.deserializeUser(async (username, done) => {
  const user = await Users.findOne({ username: username });
  if (user) {
    done(null, user);
  }
});

passport.use(new LocalStrategy(
    async function(username, password, done) {
      const user = await Users.findOne({where: { username: username }});
      try {
        if (!user) {
          done(null, false);
        } else {
          if (user.username === username) {
            done(null, user)
          } else {
            done(null, false);
          }
        }
      } catch (error) {
        done(err,false);
      }
      
      }
  ));

  module.exports = passport;