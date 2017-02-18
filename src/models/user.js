// const mongoose = require('mongoose')
const mongoose = require('../lib/db')

const User = mongoose.model('User', {
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  active: { type: Boolean, default: true },
  roles: [String]
})

module.exports = User
