const { Controller } = require('../../lib/resources')
const resource = require('./resource')

class TodoController extends Controller {}

module.exports = new TodoController(resource)
