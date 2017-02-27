const { Controller } = require('../../lib/resources')
const User = require('./resource')

class UserController extends Controller {
  // TODO: add custom resource logic here

  create (req, res) {
    this.resource.create(req.body)
      .then(({ user, token }) => {
        res.header('X-Auth-Token', `Bearer ${token}`).send(user)
      })
      .catch(err => res.status(400).send(err))
  }
}

module.exports = new UserController(User)
