const { Resource } = require('../../lib/resources')
const schema = require('./model')

class User extends Resource {

  create (input) {
    const user = new this.Schema(input)
    return user.save()
      .then(() => {
        return user.generateAuthToken()
          .then(token => {
            return { user, token }
          })
      })
  }

  findByToken (token) {
    return this.Schema
      .findByToken(token)
  }

  findByCredentials (email, password) {
    return this.Schema
      .findByCredentials(email, password)
  }
}

module.exports = new User(schema)
