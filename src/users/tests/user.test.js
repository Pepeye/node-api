const app = require('../../server')
const request = require('supertest')
const { users, populateUsers } = require('./')

describe('[STORMTROOPER]: USERS Tests', () => {
  beforeAll(populateUsers)

  describe('# POST /users', () => {
    test('should create a new user', async () => {
      let { status, body } = await request(app)
        .post('/users')
        .send(users[0])

      expect(status).toBe(200)
      expect(typeof body).toBe('object')
      expect(body.email).toBe(users[0].email)
    })

    test('should return validation errors if request invalid', async () => {
      let { status } = await request(app)
        .post('/users')
        .send({
          email: 'wrongemail',
          password: '123'
        })

      expect(status).toBe(400)
    })

    test('should not create if email in use', async () => {
      let { status } = await request(app)
        .post('/users')
        .send({
          email: users[0].email,
          password: 'password'
        })

      expect(status).toBe(400)
    })
  })

  describe('GET /users/me', () => {
    test('should return user if authenticated', async () => {
      let { status, body } = await request(app)
        .get('/users/me')
        .set('X-Auth-Token', users[0].tokens[0].token)

      expect(status).toBe(200)
      expect(typeof body).toBe('object')
      expect(body._id).toBe(users[0]._id.toHexString())
      expect(body.email).toBe(users[0].email)
    })

    test('should return 401 if not authenticated', async () => {
      let { status } = await request(app)
        .get('/users/me')

      expect(status).toBe(401)
    })
  })
})
