import mongoose from 'mongoose'



export const webshopSchema = mongoose.Schema({
  // Properties defined here match the keys from the json file
  name: {
    type: String,
  },
  website: {
    type: String,
  },
  images: {
    url: {
      type: String,
      default: "http://192.168.1.181:8080/webshop/no-image.png"
    }
  },
  rating: {
    type: Number,
    default: null
  }
})




module.exports = mongoose.model('Webshop', webshopSchema)
