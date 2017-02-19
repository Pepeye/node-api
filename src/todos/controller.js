const { Controller, Resource } = require('../../lib/resources')

class TodoController extends Controller {}

module.exports = new TodoController(Resource)
