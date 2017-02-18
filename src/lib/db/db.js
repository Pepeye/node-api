const mongoose = require('mongoose')
const MONGO_URL = `mongodb://localhost:27017/todoapp`

// Use native promises
mongoose.Promise = global.Promise
mongoose.connnect(MONGO_URL)
