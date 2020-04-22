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


router.get('/', async (req, res, next) => {
  console.log(`GET /product?search=${req.query.search}`)

  try {
    const products = await Product.find(({
      "$or": [
        { name: { '$regex': req.query.search, '$options': 'i' } },
        { brand: { '$regex': req.query.search, '$options': 'i' } }
      ]
    }))
    console.log("-------------------------------")
    products.map(product => console.log(`BRAND: ${product.brand}    NAME: ${product.name}`))
    console.log("-------------------------------")

    res.json(products)
  }
  catch (err) {
    next(err)
  }
})


module.exports = router
