import express from 'express'
import mongoose, { Query } from 'mongoose'


// Models
import User from '../models/usermodel'
import Product from '../models/productmodel'


import createError from 'http-errors'


const router = express.Router()



// ---------------------- USER ROUTES ------------------------- //

// Get User products 

router.get('/:id', async (req, res) => {
  console.log(`GET /user/${req.params.id}`)
  try {
    const userCabinet = await User.findById(req.params.id).populate({ path: 'cabinet.product', model: Product })
    if (userCabinet) {
      res.json(userCabinet)
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  }
  catch (err) {
    next(err)
  }
})


// POST a new product to user cabinet
// router.post('/:id/add_product/id/:id', async (req, res, next) => {
//   console.log("POST /user/ ", req.body)
//   try {
//     const newProduct = await new Product({ product: req.body.product }).save()
//     res.json(newProduct)
//   }
//   catch (err) {
//     console.error("Error:", err)
//     next(err)
//   }
// })




// POST a product as finished/unfinished
// router.post('/finished/id/:id', async (req, res, next) => {
//   console.log("POST /finished/ ", req.body)
//   try {
//     const product = await Product.findById(req.params.id)
//     product.finished = !product.finished
//     product.save()
//     res.json(product)
//   }
//   catch (err) {
//     console.error("Error:", err)
//     next(err)
//   }
// })


// DELETE
// router.delete('/id/:id', async (req, res, next) => {
//   console.log("DELETE /product/id/", req.params.id)
//   try {
//     const product = await Product.findById(req.params.id)
//     // If no product found
//     if (product == null) {
//       throw createError(404, 'No product with this id found')
//     }
//     product.deleteOne()
//     res.json(product).status(204)
//   }
//   catch (err) {
//     next(err)
//   }
// })


module.exports = router
