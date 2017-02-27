const { ObjectID } = require('mongodb')
const jwt = require('jsonwebtoken')

let access = 'local'
let userid = new ObjectID()
let params = { _id: userid, access }

module.exports = [
  {
    _id: userid,
    firstName: 'John',
    lastName: 'Appleseed',
    email: 'john.appleseed@stratbox.io',
    password: 'password',
    active: true,
    tokens: [
      {
        access,
        token: jwt.sign(params, process.env.SECRET).toString()
      }
    ],
    roles: [
      'jedi',
      'rebelion'
    ]
  }
]
