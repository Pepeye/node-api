const Todo = require('../model')
const todos = require('./todos.seed.json')

const populateTodos = (done) => {
  Todo
    .remove({})
    .then(() => {
      return Todo
        .insertMany(todos)
        .then((docs) => done())
    })
    .catch(err => done(err))
}

module.exports = { todos, populateTodos }
