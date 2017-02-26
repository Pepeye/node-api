const Router = require('express').Router
const router = new Router()

/**
 * Import models
 */
// const user = require('./users').routes
const todos = require('./todos').Routes

// router.use('/user', user)
router.use('/todos', todos)

module.exports = router
