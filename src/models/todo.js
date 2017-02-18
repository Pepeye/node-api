const mongoose = require('../lib/db')
const { jsonprint } = require('../lib/helpers')
const todos = require('./seed/todos.json')

const Todo = mongoose.model('Todo', {
  text: { type: String },
  completed: { type: Boolean },
  completedAt: { type: Number }
})

// module.exports = Todo
// let todo = new Todo({
//   text: 'Learn Mongoose ORM',
//   completed: false
// })
//
// todo
//   .save()
//   .then(doc => jsonprint(doc))
//   .catch(err => console.log(err))

Todo
  .insertMany(todos)
  .then(docs => jsonprint(docs))
  .catch(err => console.log(err))
