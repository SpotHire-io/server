import request from 'supertest'
import graphqlHTTP from 'express-graphql'
import schema from '../src/schema'
import server from '../src/server'

let userMock = jest.fn().mockReturnValueOnce({ email: 'mike@korora.ca' })

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: {
      db: {
        getUserByEmail: userMock,
      },
    },
  })
)

describe('GraphQL API', () => {
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
    it('finds a user by email', async () => {
      let response = await request(server)
        .post('/graphql')
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
