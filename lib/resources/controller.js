class Controller {
  constructor (resource) {
    this.resource = resource
  }

  // find (req, res, next) {
  find (req, res) {
    return this.resource.find(req.query)
    .then(docs => res.status(200).send({ docs }))
    .catch(err => res.status(400).send(err))
    // .catch(err => next(err))
  }

  // findOne (req, res, next) {
  findOne (req, res) {
    return this.resource.findOne(req.query)
    .then(doc => res.status(200).send(doc))
    .catch(err => res.status(400).send(err))
    // .catch(err => next(err))
  }

  // findById (req, res, next) {
  findById (req, res) {
    return this.resource.findById(req.params.id)
    .then((doc) => {
      if (!doc) { return res.status(404).end() }
      return res.status(200).send(doc)
    })
    .catch(err => res.status(400).send(err))
    // .catch(err => next(err))
  }

  // create (req, res, next) {
  create (req, res) {
    this.resource.create(req.body)
    .then(doc => res.status(201).send(doc))
    .catch(err => res.status(400).send(err))
    // .catch(err => next(err))
  }

  // update (req, res, next) {
  update (req, res) {
    const conditions = { _id: req.params.id }

    this.resource.update(conditions, req.body)
    .then((doc) => {
      if (!doc) { return res.status(404).end() }
      return res.status(200).send(doc)
    })
    .catch(err => res.status(400).send(err))
    // .catch(err => next(err))
  }

  // remove (req, res, next) {
  remove (req, res) {
    this.resource.remove(req.params.id)
    .then((doc) => {
      if (!doc) { return res.status(404).end() }
      return res.status(200).end()
      // return res.status(204).end()
    })
    .catch(err => res.status(400).send(err))
    // .catch(err => next(err))
  }

}

module.exports = Controller
