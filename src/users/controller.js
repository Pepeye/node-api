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

  // findById (req, res, next) {
  me (req, res) {
    let token = req.header('X-Auth-Token')
    return this.resource.findByToken(token)
      .then((user) => {
        if (!user) { return res.status(404).end() }
        // if (!user) { return Promise.reject() }
        return res.status(200).send(user)
      })
      .catch(err => res.status(401).send(err))
      // .catch(err => next(err))
  }
}

module.exports = new UserController(User)
