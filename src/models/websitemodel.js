import mongoose from 'mongoose'



//setup of websites
const Website = mongoose.model('Website', {
  // Properties defined here match the keys from the json file
  name: {
    type: String,
  },
  url: {
    type: String,
  },
})




module.exports = Website
