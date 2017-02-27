const { Controller } = require('../../lib/resources')
const User = require('./resource')

class UserController extends Controller {
  // TODO: add custom resource logic here

  create (req, res) {
    this.resource.create(req.body)
      .then(({ user, token }) => {
        res.header('X-Auth-Token', token).send(user)
      })
      .catch(err => res.status(400).send(err))
  }

  me (req, res) {
    res.status(200).send(req.user)
  }
}

module.exports = new UserController(User)
