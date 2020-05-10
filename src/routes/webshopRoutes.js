import express from 'express'

// Models
import Webshop from '../models/webshopmodel'

const router = express.Router()

// // ------------------ WEBSITE ROUTES  ------------------------- //

// // Get website by id
// router.get('/id/:id', async (req, res, next) => {
//   console.log("GET /website/id/", req.params.id)

//   try {
//     const website = await Website.findById(req.params.id)
//     res.json(website)
//   }
//   catch (err) {
//     next(err)
//   }
// })

// // Get all websites
// router.get('/', async (req, res, next) => {
//   console.log("GET /breed ", req.query)

//   // This is a query object used to query websites
//   let websiteQuery = {
//     "address": req.query.websites,
//     "brand": req.query.brand ? req.query.brand : undefined,
//     "price": req.query.price ? req.query.price.sort('desc').exec() : undefined,
//   }
//   Object.keys(websiteQuery).forEach(key => websiteQuery[key] === undefined ? delete websiteQuery[key] : {}) // Removes keys which are undefined (empty)

//   try {
//     const websites = await Website.find(websiteQuery).sort('price')
//     res.json(websites)
//   }
//   catch (err) {
//     next(err)
//   }
// })

module.exports = router
