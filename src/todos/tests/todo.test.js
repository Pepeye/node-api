const app = require('../../server')
const request = require('supertest')
const { populateTodos } = require('./')

describe('[STORMTROOPER]: TODO Tests', () => {
  describe('# POST /todos', () => {
    // run before each POST /todos test
    beforeEach(populateTodos)

    test('should create a new todo', async () => {
      let text = 'Fix this Jest Test'
      let { status, body } = await request(app)
        .post('/todos')
        .send({ text })

      expect(status).toBe(201)
      expect(typeof body).toBe('object')
      expect(body.text).toBe(text)
    })

    test('should not create todo with invalid data', async () => {
      let { status, body } = await request(app)
        .post('/todos')
        .send({})

      expect(status).toBe(400)
      expect(typeof body).toBe('object')
      expect(Object.keys(body)).toContain('errors')
      expect(body.errors).not.toBeUndefined()
    })
  })

  describe('# GET /todos', () => {
    test('should get all todos', async () => {
      let { status, body } = await request(app)
          .get('/todos')

      expect(status).toBe(200)
      expect(typeof body).toBe('object')
      expect(body.docs.length).toBe(9)
    })
  })
})
