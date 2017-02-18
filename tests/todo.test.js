const { app } = require('../src/server')
const request = require('supertest')
// const request = require('supertest-as-promised')
const { Todo } = require('../src/models')
const { todos } = require('../src/lib/seed')

describe('STORMTROOPER TESTS SUITE', () => {
  describe('POST /todos', () => {
    beforeEach((done) => {
      Todo
        .remove({})
        .then(() => {
          return Todo
            .insertMany(todos)
            .then(() => done())
        })
        .catch(err => done(err))
    })

    test('should create a new todo', async () => {
      let text = 'Something to do'
      let { status, body } = await request(app)
        .post('/todos')
        .send({ text })

      console.dir({ status, body }, { colors: true, depth: 2 })
      expect(status).toBe(200)
      expect(body.text).toBe(text)
    })

    it('should not create todo with invalid data', async () => {
      let { status, body } = await request(app)
        .post('/todos')
        .send({})

      console.dir({ status, body }, { colors: true, depth: 2 })
      expect(status).toBe(400)
    })
  })

  describe('GET /todos', () => {
    it('should get all todos', async () => {
      let { status, body } = await request(app)
          .get('/todos')
          .expect(200)

      console.dir({ status, body }, { colors: true, depth: 2 })
      expect(body.todos.length).toBe(9)
    })
  })
})
