import express from 'express'

// Models
import Price from '../models/pricemodel'

const router = express.Router()

// ------------------ PRICES ROUTES  ------------------------- //

// Get prices by query
router.get('/', async (req, res, next) => {
  console.log(`GET price/?product_id=${req.query.product_id}&limit=${req.query.limit}`)

  try {
    const prices = await Price.find({ "product": req.query.product_id }).populate('product webshop').sort('price').limit(Number(req.query.limit))
    res.json(prices)
  }
  catch (err) {
    next(err)
  }
})

module.exports = router
