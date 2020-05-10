// Models
import Product from './models/productmodel'
import Webshop from './models/webshopmodel'
import User from './models/usermodel'
import Price from './models/pricemodel'
// JSON data
import mockProducts from './data/products.json'
import mockWebshops from './data/webshops.json'
import mockUsers from './data/users.json'
import mockPrices from './data/prices.json'



// Populating database with test data
const ResetDB = async () => {

  // Removing and repopulating products
  await Product.deleteMany({})
  mockProducts.forEach((product) => {
    new Product(product).save()
  })

  // Removing and repopulating webshops
  await Webshop.deleteMany({})
  mockWebshops.forEach((webshop) => {
    new Webshop(webshop).save()
  })

  // Removing and repopulating users
  await User.deleteMany({})
  mockUsers.forEach((user) => {
    new User(user).save()
  })

  // Removing and repopulating prices
  await Price.deleteMany({})
  mockPrices.forEach((price) => {
    new Price(price).save()
  })
  console.log("Database is now reset")
}

export default ResetDB