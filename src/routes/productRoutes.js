import express from 'express'
import mongoose, { Query } from 'mongoose'


// Models
import Product from '../models/productmodel'
import Website from '../models/websitemodel'


import createError from 'http-errors'


const router = express.Router()



// ------------------PRODUCT ROUTES ------------------------- //

// Get product by id

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
// router.post('/', async (req, res, next) => {
//   console.log("POST /Product ", req.body)
//   try {
//     const product = await new Product(req.body).save()
//     res.json(product)
//   }
//   catch (err) {
//     console.error("Error:", err)
//     next(err)
//   }
// })


router.get('/', async (req, res, next) => {
  console.log("GET /product", req.query)

  // This is a query object used to query the products
  let productQuery = {
    "brand": new RegExp(req.query.brand, 'i') || undefined,
    "name": new RegExp(req.query.name, 'i') || undefined,
    "size": req.query.size ? req.query.size : undefined, ///How to query size?
  }
  Object.keys(productQuery).forEach(key => productQuery[key] === undefined ? delete productQuery[key] : {}) // Removes keys which are undefined (empty)

  try {
    const products = await Product.find(productQuery)
    res.json(products)
  }
  catch (err) {
    next(err)
  }
})


module.exports = router
