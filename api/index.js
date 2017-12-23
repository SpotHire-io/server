const { Database } = require('arangojs')
const Connection = require('./src/database').default
const Server = require('./src/server').default

const username = process.env.ARANGODB_USERNAME
const password = process.env.ARANGODB_PASSWORD
const sharedSecret = process.env.SPOTHIRE_AUTH0_CLIENT_SECRET

const db = Connection(
  new Database({
    databaseName: 'spothire',
    url: `http://${username}:${password}@arangodb:8529`,
  })
)

const server = Server(db, sharedSecret)

server.listen(3001)
