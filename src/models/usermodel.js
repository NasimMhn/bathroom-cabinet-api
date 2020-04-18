import mongoose from 'mongoose'

// Setup of User schema 
export const userSchema = new mongoose.Schema({
  // Properties defined here match the keys from the json file
  name: {
    type: String,
  },
  cabinet: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
      },
      finished: {
        type: Boolean,
        default: false
      },
    }
  ]
})

module.exports = mongoose.model('User', userSchema)

