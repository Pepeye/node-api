const mongoose = require('mongoose')
const MONGO_URL = `mongodb://localhost:27017/stormtrooper`

// Use native promises
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL)

module.exports = mongoose
