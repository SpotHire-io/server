import React from 'react'
import ReactDOM from 'react-dom/server'
import express from 'express'
import jwtMiddleware from 'express-jwt'
import path from 'path'
import App from './App'
import template from './template'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

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
      }
    })
  )

  server.get('/', (req, res, next) => {
    const body = ReactDOM.renderToString(<App />)
    const html = template(body)
    res.send(html)
  })

  return server
}

export default Server
