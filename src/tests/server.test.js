const request = require('supertest')
const { app } = require('../')
const { Todo } = require('../models')

describe('STORMTROOPER TESTS SUITE', () => {
  beforeAll((done) => {
    Todo
      .remove({})
      .then(({ result }) => {
        console.log(`[info]: removed collection ${Todo.modelName} - ${result.n} items removed.`)
        done()
      })
      .catch(err => done(err))
  })

  describe('POST /todos', () => {
    test('should create a new todo', (done) => {
      let text = 'Todo test'

      request(app)
        .post('/todos')
        .send({ text })
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(text)
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          Todo
            .find()
            .then((todos) => {
              expect(todos.length).toBe(1)
              expect(todos[0].text).toBe(text)
              done()
            })
            .catch(err => done(err))
        })
    })

    test('should not create todo with invalid data', (done) => {
      request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
          if (err) {
            return done(err)
          }

          Todo
            .find()
            .then((todos) => {
              expect(todos.length).toBe(0)
              done()
            })
            .catch(err => done(err))
        })
    })
  })
})
