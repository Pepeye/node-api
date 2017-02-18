// const { MongoClient, ObjectID } = require('mongodb')
// const MONGO_URL = `mongodb://localhost:27017/todoapp`
// const { jsonprint } = require('../helpers')

// MongoClient
//   .connect(MONGO_URL)
//   .then((db) => {
//     console.log('[info]: insert todo')
//     db
//     .collection('todos')
//     .insertOne({
//       text: `Something to do`,
//       completed: false,
//       timestamp: Date.now()
//     })
//     .then(results => jsonprint(results.ops))
//     .catch(err => console.log('[err]: unable to insert record', err))
//
//     db.close()
//   })
//   .catch(({name, message}) => console.log({name, message}))

// MongoClient
//   .connect(MONGO_URL)
//   .then((db) => {
//     console.log('[info]: insert user')
//     db
//     .collection('users')
//     .insertOne({
//       name: 'Sam Aofolaju',
//       email: 'sam@stratbox.io',
//       city: 'London',
//       country: 'United Kingdom'
//     })
//     .then(results => jsonprint(results.ops))
//     .catch(err => console.log('[err]: unable to insert record', err))
//
//     db.close()
//   })
//   .catch(({name, message}) => console.log({name, message}))

// MongoClient
//   .connect(MONGO_URL)
//   .then((db) => {
//     console.log('[info]: find todos')
//     db
//     .collection('todos')
//     .find({_id: new ObjectID('58a838c3f49cfbbad12e3a3c')})
//     .toArray()
//     .then(docs => jsonprint(docs))
//     .catch(err => console.log('[err]: unable to find docs', err))
//
//     db.close()
//   })
//   .catch(({name, message}) => console.log({name, message}))

// MongoClient
//   .connect(MONGO_URL)
//   .then((db) => {
//     db
//     console.log('[info]: count todos')
//     .collection('todos')
//     .find()
//     .count()
//     .then(count => jsonprint({count}))
//     .catch(err => console.log('[err]: unable to find docs', err))
//
//     db.close()
//   })
//   .catch(({name, message}) => console.log({name, message}))
//
// MongoClient
//   .connect(MONGO_URL)
//   .then((db) => {
//     console.log('[info]: find user by email')
//     db
//     .collection('users')
//     .find({ email: 'sam@stratbox.io' })
//     .toArray()
//     .then(docs => jsonprint(docs))
//     .catch(err => console.log('[err]: unable to find docs', err))
//
//     db.close()
//   })
//   .catch(({name, message}) => console.log({name, message}))
//
//   MongoClient
//     .connect(MONGO_URL)
//     .then((db) => {
//       console.log('[info]: delete todos')
//       db
//       .collection('todos')
//       .deleteMany({ completed: false })
//       .then(results => jsonprint(results))
//       .catch(err => console.log('[err]: unable to delete docs', err))
//
//       db.close()
//     })
//     .catch(({name, message}) => console.log({name, message}))
//
// MongoClient
//   .connect(MONGO_URL)
//   .then((db) => {
//     console.log('[info]: delete one user')
//     db
//     .collection('users')
//     .deleteOne({ email: 'sam@stratbox.io' })
//     .then(results => jsonprint(results))
//     .catch(err => console.log('[err]: unable to delete docs', err))
//
//     db.close()
//   })
//   .catch(({name, message}) => console.log({name, message}))
//
// MongoClient
//   .connect(MONGO_URL)
//   .then((db) => {
//     console.log('[info]: delete one user')
//     db
//     .collection('users')
//     .findOneAndDelete({ email: 'sam@stratbox.io' })
//     .then(doc => jsonprint(doc))
//     .catch(err => console.log('[err]: unable to delete docs', err))
//
//     db.close()
//   })
//   .catch(({name, message}) => console.log({name, message}))

// MongoClient
// .connect(MONGO_URL)
// .then((db) => {
//   console.log('[info]: update a todo')
//   db
//   .collection('todos')
//   .findOneAndUpdate(
//     { _id: new ObjectID('58a84031b54350c883da32df') },
//     { $set: { completed: true }},
//     { returnOriginal: false }
//   )
//   .then(doc => jsonprint(doc))
//   .catch(err => console.log('[err]: unable to delete docs', err))
//
//   db.close()
// })
// .catch(({name, message}) => console.log({name, message}))
