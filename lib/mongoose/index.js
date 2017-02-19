const config = require('../../src/config')
const mongoose = require('mongoose')

// Use native promises
mongoose.Promise = global.Promise
mongoose.connect(config.mongo.url)

module.exports = mongoose
