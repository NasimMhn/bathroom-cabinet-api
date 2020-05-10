import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose, { Query } from 'mongoose' //do we need this?


import methodOverride from 'method-override' //do we need this?
import ResetDB from './resetdb'



// Routes
import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
import webshopRoutes from './routes/webshopRoutes'


const app = express()

console.log(`\nRESET_DB: ${process.env.RESET_DB} \n`)

if (process.env.RESET_DB) {
  ResetDB()
}


// MIDDLEWARES to enable cors and json body parsing
app.use(cors())
// app.use(fileUpload())
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(express.static('public'))


// Routes
app.use('/product', productRoutes)
app.use('/user', userRoutes)
app.use('/webshop', webshopRoutes)


app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({ error: 'Service unavailabale' })
  }
})





// ------------------ ERROR HANDLING ROUTES ------------------------- //
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} does not exist` })
})
app.use((err, res) => {
  const status = err.status || 500
  res.status(status).json({ error: err.message })
})

module.exports = app