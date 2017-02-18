const express = require('express')
const bodyparser = require('body-parser')

// const mongoose = require('./lib/db')
// const { Todo, User } = require('./models')

let app = express()

app.use(bodyparser.json())

app.use('/todos', (req, res) => {
  console.log(req.body)
})

app.listen(3000, () => {
  console.log('Started on port 3000')
})
