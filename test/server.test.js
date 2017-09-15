const request = require('supertest')
const Server = require('../src/server').default

let userMock = jest
  .fn()
  .mockReturnValueOnce({ email: 'mike@korora.ca', name: 'mike' })

const secret = 'secret'

const server = Server(
  {
    getUserByEmail: userMock,
  },
  secret,
)

describe('Server', () => {
  it("serves a 404 for routes that don't exist", async () => {
    let response = await request(server).get('/asdf')
    expect(response.status).toEqual(404)
  })
})
