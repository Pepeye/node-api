// extract app configs
const config = require('./config')

// import core server libraries
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
// const csrf = require('csurf')
const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const debug = require('debug')(`${config.name}:server`)
const routes = require('./routes')

const app = express()

process.env.SECRET = 'somesupersecretpasswordthatishardtoguess'

/**
 * Configure middleware
 */
debug(config.environment)
debug(config.mongo.url)
debug('configuring middleware')

app.use(helmet())
app.use(cors())
// app.use(csrf())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (config.environment !== 'test') {
  app.use(morgan('dev'))
}

/**
 * API routes / endpoints
 */
 /**
  * Define routes
  */
app.get('/', (req, res) => {
  res.json({ message: 'Welcome Stormtrooper!' })
})

app.use('/', routes)

module.exports = app
