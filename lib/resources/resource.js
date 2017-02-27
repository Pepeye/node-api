class Resource {
  constructor (Schema) {
    this.Schema = Schema
  }

  create (input) {
    const schema = new this.Schema(input)
    return schema.save()
  }

  update (conditions, update) {
    return this.Schema
    .update(conditions, update, { new: true })
  }

  find (query) {
    return this.Schema
    .find(query)
  }

  findOne (query) {
    return this.Schema
    .findOne(query)
  }

  findById (id) {
    return this.Schema
    .findById(id)
  }

  findByToken (token) {
    return this.Schema
    .findByToken(token)
  }

  remove (id) {
    return this.Schema
    .findByIdAndRemove(id)
  }
}

module.exports = Resource
