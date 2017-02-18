const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
let debug = require('debug')('stormtrooper')

// const mongoose = require('./lib/db')
const { Todo } = require('./models')

let app = express()

/**
 * Configure middleware
 */
debug('configuring middleware')
app.use(logger('dev'))
app.use(bodyParser.json())

/**
 * API routes / endpoints
 */
app.use('/todos', (req, res) => {
  // console.log(req.body)
  let todo = new Todo({
    text: req.body.text
  })
  todo
    .save()
    .then((doc) => res.send(doc))
    .catch(err => res.status(400).send(err))
})

module.exports = app
