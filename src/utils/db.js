import mongoose from 'mongoose'
import { dbUrl } from '../config'

export const connect = (url = dbUrl, options = {}) => {
  return mongoose.connect(url, {
    ...options,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
