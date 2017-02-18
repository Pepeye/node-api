const request = require('supertest')
const { app } = require('../')
const { Todo } = require('../models')

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
          .find({ text })
          .then((todos) => {
            expect(todos.length).toBe(1)
            expect(todos[0].text).toBe(text)
            done()
          })
      })
  })
})
