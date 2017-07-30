import { Database } from 'arangojs'
import Connection from './src/database'
import Server from './src/server'

const username = process.env.ARANGODB_USERNAME
const password = process.env.ARANGODB_PASSWORD
const sharedSecret = process.env.SPOTHIRE_SHARED_SECRET

const db = Connection(
  new Database({
    databaseName: 'spothire',
    url: `http://${username}:${password}@arangodb:8529`,
  })
)

const server = Server(db, sharedSecret)

server.listen(3000)
