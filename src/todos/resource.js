const { Resource } = require('../../lib/resources')
const schema = require('./schema')

class Todo extends Resource {}

module.exports = new Todo(schema)
