// extract app configs
const config = require('./config')

// import core server libraries
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const csrf = require('csurf')
const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const debug = require('debug')(`${config.name}:server`)
const routes = require('./routes')

const app = express()

/**
 * Configure middleware
 */
debug(config.environment)
debug(config.mongo.url)
debug('configuring middleware')

app.use(helmet())
app.use(cors())
app.use(csrf())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/', routes)

/**
 * API routes / endpoints
 */
app.use('/', routes)

module.exports = app
