const express = require('express')
const graphqlHTTP = require('express-graphql')
const jwtMiddleware = require('express-jwt')
const path = require('path')
const schema = require('./schema').default

const Server = (db, secret) => {
  const server = express()

  server.use(express.static(process.cwd() + '/dist/public'))

  server.use(
    '/graphql',
    jwtMiddleware({
      secret,
      requestProperty: 'auth',
      credentialsRequired: false,
    }),
    graphqlHTTP(req => {
      let user
      if (req.auth) {
        user = req.auth
      }
      return {
        schema,
        context: {
          user,
          db,
        },
        graphiql: true,
      }
    }),
  )

  return server
}

module.exports.default = Server
