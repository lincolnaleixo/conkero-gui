import { connect } from 'mongoose'
import { MONGO_URI } from './config.js'

(async () => {
  try {
    await connect(MONGO_URI)
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (err) {
    // console.log('error connecting to mongo', err)
  }
})()
