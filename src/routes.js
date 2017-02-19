const Router = require('express').Router
const router = new Router()

/**
 * Import models
 */
// const user = require('./users').routes
const todo = require('./todos').Routes

/**
 * Define routes
 */
router.route('/').get((req, res) => {
  res.json({ message: 'Welcome Stormtrooper!' })
})

// router.use('/user', user)
router.use('/todos', todo)

module.exports = router
