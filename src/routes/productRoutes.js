import express from 'express'
import mongoose, { Query } from 'mongoose'


// Models
import Product from '../models/productmodel'
import Website from '../models/websitemodel'


import createError from 'http-errors'


const router = express.Router()

// ------------------PRODUCT ROUTES ------------------------- //

// Get product by id

// router.get('/', async (req, res, next) => {
//   console.log("GET /MyCabinetProducts ", req.query)
//   try {
//     res.json(products)
//   }
//   catch (err) {
//     next(err)
//   }
// })

router.get('/id/:id', async (req, res, next) => {
  console.log("GET /product/id/", req.params.id)
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  }
  catch (err) {
    next(err)
  }
})

// POST a new product
router.post('/', async (req, res, next) => {
  console.log("POST /MyNewCabinetProduct ", req.body)
  try {
    const product = await new Product(req.body).save()
    res.json(product)
  }
  catch (err) {
    console.error("Error:", err)
    next(err)
  }
})

// POST a product as finished/unfinished
router.post('/finished/id/:id', async (req, res, next) => {
  console.log("POST /finished/id/ ", req.body)
  try {
    const product = await Product.findById(req.params.id)
    product.finished = !product.finished
    product.save()
    res.json(product)
  }
  catch (err) {
    console.error("Error:", err)
    next(err)
  }
})

// DELETE
router.delete('/id/:id', async (req, res, next) => {
  console.log("DELETE /product/id/", req.params.id)
  try {
    const product = await Product.findById(req.params.id)
    // If no product found
    if (product == null) {
      throw createError(404, 'No product with this id found')
    }
    product.deleteOne()
    res.json(product).status(204)
  }
  catch (err) {
    next(err)
  }
})


// GET products with query


router.get('/', async (req, res, next) => {
  console.log("GET /product", req.query)

  // This is a query object used to query websites
  try {
    const products = await Product.find().populate('website')
    res.json(products)
  }
  catch (err) {
    next(err)
  }
})

// router.get('/', async (req, res, next) => {
//   console.log("GET /product", req.query)

//   // This is a query object used to query websites

//   let websiteQuery = {
//     "address": req.query.websites,
//     "brand": req.query.brand ? req.query.brand : undefined,
//     "price": req.query.price ? req.query.price.sort('desc').exec() : undefined,
//   }

//   Object.keys(websiteQuery).forEach(key => websiteQuery[key] === undefined ? delete websiteQuery[key] : {}) // Removes keys which are undefined (empty)

//   const websites = await Website.find(websiteQuery).select('_id')
//   let website_ids = websites.map(({ _id }) => (new mongoose.Types.ObjectId(_id))) // array with id's of filtered websites


//   // This is a query object used to query the products
//   let productQuery = {
//     "brand": req.query.brand || undefined,
//     "detail": req.query.detail ? req.query.detail : undefined,
//     "volume": { $gte: req.query.minVolume || 0, $lte: req.query.maxVolume || 1000 },
//     "finished": req.query.finished ? req.query.finished : undefined,
//   }
//   Object.keys(productQuery).forEach(key => productQuery[key] === undefined ? delete productQuery[key] : {}) // Removes keys which are undefined (empty)

//   try {
//     const products = await Product.find(productQuery).where('websites').in(website_ids)
//       .populate('websites')
//     res.json(products)
//   }
//   catch (err) {
//     next(err)
//   }
// })


module.exports = router
