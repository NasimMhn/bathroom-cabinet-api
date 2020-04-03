import mongoose from 'mongoose'

// Setup of productmodel 
const Product = mongoose.model('Product', {
  // Properties defined here match the keys from the json file
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  images: {
    url: {
      type: String,
      default: null
    },
  },
  size: {
    amount: {
      type: Number,
      default: null
    },
    unit: {
      type: String,
      default: null
    }
  },
  prices: [
    {
      website: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Website',
      },
      price: {
        type: Number,
        default: null
      }
    }
  ],
  finished: {
    type: Boolean,
    default: false
  },
})

module.exports = Product

