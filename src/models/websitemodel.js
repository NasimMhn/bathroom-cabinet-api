import mongoose from 'mongoose'



//setup of websites
export const websiteSchema = mongoose.Schema({
  // Properties defined here match the keys from the json file
  name: {
    type: String,
  },
  url: {
    type: String,
  },
})




module.exports = mongoose.model('Website', websiteSchema)
