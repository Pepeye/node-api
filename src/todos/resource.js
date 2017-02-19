const { Resource } = require('../../lib/resources')
const schema = require('./model')

class Todo extends Resource {}

module.exports = new Todo(schema)
