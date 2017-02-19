const mongoose = require('../../lib/mongoose')
const Schema = mongoose.Schema

const Todo = new Schema({
  text: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Number }
})

module.exports = mongoose.model('Todo', Todo)
