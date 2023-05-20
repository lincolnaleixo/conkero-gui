import passport from 'passport'
import { Strategy } from 'passport-http-bearer'
import { User } from '../models/user'

export const init = async () => {
  passport.use(
    new Strategy(function (token, done) {
      User.findOne({ token }, function (err, user) {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false)
        }
        return done(null, user, { scope: 'all' })
      })
    })
  )
}
