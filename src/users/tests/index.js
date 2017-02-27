const User = require('../resource')
const users = require('./seed')

const populateUsers = () => {
  User
    .remove({})
    .then(() => {
      return User.create(users[0])
    })
    .catch(err => err)
}

module.exports = { users, populateUsers }
