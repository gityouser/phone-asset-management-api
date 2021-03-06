import mongoose from 'mongoose'

const assetsSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },
  serial: { type: Number, required: true },
  color: {
    type: String,
    trim: true,
    enum: ['black', 'white', 'red', 'green'],
    default: 'black',
  },
  meta: { type: String },
})

export const Asset = mongoose.model('asset', assetsSchema)
