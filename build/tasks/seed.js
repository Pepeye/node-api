// const mongoose = require('../../src/lib/db')
const seed = require('../../lib/seed')
const { jsonprint } = require('../../lib/helpers')
const { Todo, User } = require('../../src/models');

(() => {
  User
    .insertMany(seed.users)
    .then(docs => jsonprint(docs))
    .catch(err => console.log(err))

  // let todo = new Todo({
  //   text: 'Learn Mongoose ORM',
  //   completed: false
  // })

  // insert a single todo item
  // todo
  //   .save()
  //   .then(doc => jsonprint(doc))
  //   .catch(err => console.log(err))

  // // insert multiple todo item
  Todo
    .insertMany(seed.todos)
    .then(docs => jsonprint(docs))
    .catch(err => console.log(err))
})()
