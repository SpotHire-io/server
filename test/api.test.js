import request from 'supertest'
import graphqlHTTP from 'express-graphql'
import Server from '../src/server'
import jwt from 'jsonwebtoken'

let userMock = jest
  .fn()
  .mockReturnValueOnce({ email: 'mike@korora.ca', name: 'mike' })

const secret = 'secret'

const server = Server(
  {
    getUserByEmail: userMock,
  },
  secret
)

describe('GraphQL API', () => {
  describe('without an auth token', () => {
    it('is properly mounted at /graphql', async () => {
      let response = await request(server)
        .post('/graphql')
        .set('Content-Type', 'application/graphql; charset=utf-8').send(`
      query {
        __schema {
            types {
                    name
                  }
            }
      }
  `)
      expect(response.status).toEqual(200)
    })

    describe('user(email: "a@b.c")', () => {
      it('returns 401', async () => {
        let response = await request(server)
          .post('/graphql')
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            query {
              mike:user(email: "mike@korora.ca") {
                email
              }
            }
        `)
        let { errors } = response.body
        let [{ message }] = errors
        expect(message).toMatch(/not authenticated/)
      })
    })
  })

  describe('with an auth token', () => {
    let token

    beforeEach(async () => {
      token = jwt.sign(
        { secret, aud: 'clientid', name: 'mike', email: 'mike@korora.ca' },
        secret,
        { expiresIn: 60 }
      )
    })

    describe('user(email: "a@b.c")', () => {
      it('finds a user by email', async () => {
        let response = await request(server)
          .post('/graphql')
          .set('Authorization', 'Bearer ' + token)
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            query {
              mike:user(email: "mike@korora.ca") {
                email
              }
            }
        `)
        let { data } = response.body
        expect(data.mike.email).toEqual('mike@korora.ca')
      })
    })
  })
})
