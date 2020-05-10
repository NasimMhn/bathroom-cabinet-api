import mongoose from 'mongoose'




export const priceSchema = mongoose.Schema({
  // Properties defined here match the keys from the json file
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
  },
  webshop: {
    type: mongoose.Types.ObjectId,
    ref: 'Webshop',
  },
  url: {
    type: String,
    default: null
  },
  price: {
    type: Number,
    default: null
  },
})




module.exports = mongoose.model('Price', priceSchema)


// {
//   "_id": "5e58383cf6eea26b079e590b",
//   "url": "https://fyndiq.se/product/39515509-clarins-toning-lotion-normaldry-skin/"
// },
// {
//   "_id": "5e58383cf6eea26b079e590e",
//   "url": "https://www.baressoshop.se/hud/ansikte/ansiktsrengoring/clarins-toning-lotion-drynormal-400ml"
// },

// {
//   "_id": "5e58383cf6eea26b079e591b",
//   "url": "https://daystyle.se/webbshop/varumarken/exuviance/exuviance-30-2/exuviance-skin-rise-bionic-tonic-pads/"
// }