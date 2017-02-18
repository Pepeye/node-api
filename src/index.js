const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
let debug = require('debug')('stormtrooper')

// const mongoose = require('./lib/db')
const { Todo } = require('./models')

const PORT = 3000
const HOST = 'localhost'

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

// console.dir(debug, { colors: true, depth: 2 })
app.listen(PORT, HOST, () => {
  debug('Starting server')
  console.log(`
    Server Started
    =============================
    host : ${HOST}
    Port : ${PORT}
    -----------------------------
 `)
})

module.exports = { app }
