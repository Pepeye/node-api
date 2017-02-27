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
}

module.exports = new User(schema)
