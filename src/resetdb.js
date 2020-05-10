// Models
import Product from './models/productmodel'
import Webshop from './models/webshopmodel'
import User from './models/usermodel'

// JSON data
import mockProducts from './data/products.json'
import mockWebshops from './data/webshops.json'
import mockUsers from './data/users.json'

// Populating database with test data
const ResetDB = async () => {

  // Removing and repopulating products
  await Product.deleteMany({})
  mockProducts.forEach((product) => {
    new Product(product).save()
  })

  // Removing and repopulating websites
  await Webshop.deleteMany({})
  mockWebshops.forEach((webshop) => {
    new Webshop(webshop).save()
  })

  // Removing and repopulating users
  await User.deleteMany({})
  mockUsers.forEach((user) => {
    new User(user).save()
  })
  console.log("Database is now reset")
}

export default ResetDB