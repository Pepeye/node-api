const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const debug = require('debug')('stormtrooper:server')

// set mongodb URI string
process.env.MONGO_URI = `mongodb://localhost:27017/stormtrooper-${process.env.NODE_ENV}`

// const mongoose = require('./lib/db')
const { Todo, User } = require('./models')
const app = express()

/**
 * Configure middleware
 */
debug(process.env.NODE_ENV)
debug(process.env.MONGO_URI)
debug('configuring middleware')
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(morgan('dev'))
app.use(bodyParser.json())

/**
 * API routes / endpoints
 */
app.post('/todos', (req, res) => {
  // console.log(req.body)
  let todo = new Todo({
    text: req.body.text
  })
  todo
    .save()
    .then((doc) => res.send(doc))
    .catch(err => res.status(400).send(err))
})

app.get('/todos', (req, res) => {
  Todo
    .find()
    .then((todos) => {
      res.send({ todos })
    })
    .catch(err => res.status(400).send(err))
})

app.post('/users', (req, res) => {
  console.dir(req.body)
  let user = new User(req.body)
  user
    .save()
    .then((doc) => res.send(doc))
    .catch(err => res.status(400).send(err))
})

module.exports = { app }
