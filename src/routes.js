const Router = require('express').Router
const router = new Router()

/**
 * Import models
 */
const user = require('./users').Routes
const todos = require('./todos').Routes

router.use('/users', user)
router.use('/todos', todos)

module.exports = router
