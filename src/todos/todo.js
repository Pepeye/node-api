// const mongoose = require('mongoose')
const mongoose = require('../../lib/db')

const Todo = mongoose.model('Todo', {
  text: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Number }
})

module.exports = Todo
