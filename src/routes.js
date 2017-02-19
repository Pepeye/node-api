const Router = require('express').Router
const router = new Router()

/**
 * Import models
 */
const user = require('./user').routes
const todo = require('./todo').routes

/**
 * Define routes
 */
router.use('/user', user)
router.use('/todo', todo)

module.exports = router
