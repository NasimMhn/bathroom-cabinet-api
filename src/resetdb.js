// Models
import Product from './models/productmodel'
import Website from './models/websitemodel'
import User from './models/usermodel'

// JSON data
import mockProducts from './data/products.json'
import mockWebsites from './data/websites.json'
import mockUsers from './data/users.json'

// Populating database with test data
const ResetDB = async () => {

  // Removing and repopulating products
  await Product.deleteMany({})
  mockProducts.forEach((product) => {
    new Product(product).save()
  })

  // Removing and repopulating websites
  await Website.deleteMany({})
  mockWebsites.forEach((website) => {
    new Website(website).save()
  })

  // Removing and repopulating users
  await User.deleteMany({})
  mockUsers.forEach((user) => {
    new User(user).save()
  })
  console.log("Database is now reset")
}

export default ResetDB