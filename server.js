import mongoose from 'mongoose'
import app from './src/app.js'


// MONGOOSE SETUP
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/myBathroomCabinet"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise


const port = process.env.PORT || 8080


// PORT SETUP

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`)
})
