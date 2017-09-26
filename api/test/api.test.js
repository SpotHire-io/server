const request = require('supertest')
const graphqlHTTP = require('express-graphql')
const jwt = require('jsonwebtoken')
const { Database } = require('arangojs')
const Connection = require('../src/database').default
const Server = require('../src/server').default
const people = require('./data/people').default

const getFilenameFromPath = function(path) {
  return path.split('/').slice(-1).join()
}

const dbNameFromFile = function(filename) {
  return getFilenameFromPath(filename).replace(/\./g, '_') + '_' + Date.now()
}

const username = process.env.ARANGODB_USERNAME
const password = process.env.ARANGODB_PASSWORD

const secret = 'secret'
const url = `http://${username}:${password}@arangodb:8529`
const conn = new Database({ url })
const dbname = dbNameFromFile(__filename)

let db, server, testdb, usersCollection

const user = { email: 'mike@korora.ca', name: 'mike' }

describe('GraphQL API', () => {
  beforeAll(async () => {
    //create a generic connection to the db
    await conn.createDatabase(dbname, [{ username, password }])
    //create a database to run the tests in
    testdb = new Database({ databaseName: dbname, url })
    //create a users collection instance
    usersCollection = testdb.collection('users')
    //create the collection in the database
    await usersCollection.create()

    server = Server(
      Connection(
        new Database({
          databaseName: dbname,
          url,
        }),
      ),
      secret,
    )
  })

  afterAll(async () => {
    await conn.dropDatabase(dbname)
  })

  afterEach(async () => {
    await testdb.truncate()
  })
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
    let token, person, annie

    beforeEach(async () => {
      let [person, ..._] = people
      annie = person
      token = jwt.sign(
        Object.assign({ secret, aud: 'clientid' }, annie),
        secret,
        {
          expiresIn: 60,
        },
      )
    })

    describe('user(email: "a@b.c")', () => {
      it('finds a user by email', async () => {
        await usersCollection.save(annie)

        let response = await request(server)
          .post('/graphql')
          .set('Authorization', 'Bearer ' + token)
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            query {
              user(email: "acampbell0@cnbc.com") {
                firstName
              }
            }
        `)
        let { data } = response.body
        expect(data.user.firstName).toEqual('Annie')
      })

      it('gives the users phone number', async () => {
        await usersCollection.save(annie)

        let response = await request(server)
          .post('/graphql')
          .set('Authorization', 'Bearer ' + token)
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            query {
              user(email: "acampbell0@cnbc.com") {
                phone
              }
            }
        `)
        let { data } = response.body
        expect(data.user.phone).toEqual('63-(954)154-1049')
      })
    })
  })
})
