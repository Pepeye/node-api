// const mongoose = require('../../src/lib/db')
const { Todo, User } = require('../../src/models')

User
  .remove({})
  .then(({ result }) => console.log(`[info]: removed collection ${User.modelName} - ${result.n} items removed.`))
  .catch(err => console.log(err))

Todo
  .remove({})
  .then(({ result }) => console.log(`[info]: removed collection ${Todo.modelName} - ${result.n} items removed.`))
  .catch(err => console.log(err))
