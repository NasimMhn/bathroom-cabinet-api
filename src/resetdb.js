// Models
import Product from './models/productmodel'


// JSON data
import productData from './data/products.json'

// Populating database with test data
const ResetDB = async () => {

  // Removing and repopulating products
  await Product.deleteMany({})
  productData.forEach((product) => {
    new Product(product).save()
  })
  console.log("Database is now reset")
}

export default ResetDB