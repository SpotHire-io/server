const request = require('supertest')
const graphqlHTTP = require('express-graphql')
const jwt = require('jsonwebtoken')
const { Database } = require('arangojs')
const Connection = require('../src/database').default
const Server = require('../src/server').default

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

describe('GraphQL mutations', () => {
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
        })
      ),
      secret
    )
  })

  afterAll(async () => {
    await conn.dropDatabase(dbname)
  })

  afterEach(async () => {
    await testdb.truncate()
  })
  describe('without an auth token', () => {
    describe('addUser', () => {
      it('returns an error', async () => {
        let response = await request(server)
          .post('/graphql')
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            mutation {
                addUser(user: {
                  email: "mike@korora.ca"
                  firstName: "Mike"
                  lastName: "Williamson"
                }
              ) {
                email
              }
            }
        `)
        let { errors } = response.body
        let [{message}] = errors
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

    describe('addUser', () => {
      it('adds a user to the database', async () => {
        //Use usersCollection to get the user after?
        //await usersCollection.save(user)

        let response = await request(server)
          .post('/graphql')
          .set('Authorization', 'Bearer ' + token)
          .set('Content-Type', 'application/graphql; charset=utf-8').send(`
            mutation {
                addUser(user: {
                  email: "mike@korora.ca"
                  firstName: "Mike"
                  lastName: "Williamson"
                }
              ) {
                email
              }
            }
        `)
        let { data } = response.body
        expect(data.addUser.email).toEqual('mike@korora.ca')
      })
    })
  })
})
