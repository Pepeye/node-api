const controller = require('./controller')
const { Router } = require('express')
const { authenticate } = require('../middleware')
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args))

router.get('/me', authenticate, (...args) => controller.me(...args))
// router.route('/me')
//   .get((...args) => controller.me(...args))

// router.route('/:id')
//   .put((...args) => controller.update(...args))
//   .get((...args) => controller.findById(...args))
//   .delete((...args) => controller.remove(...args))

module.exports = router
