const mongoose = require('mongoose')

// Use native promises
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)

module.exports = mongoose
