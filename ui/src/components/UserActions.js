import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auth0Lock from 'auth0-lock'
import gql from 'graphql-tag'
import { ApolloLink } from 'apollo-link'
import { connect } from 'react-redux'
import client from '../client'

var clientId = 'GeAYDzx6xVk7L7Hev1zdO6u83aP1gX9U'
var domain = 'spothire.auth0.com'

class UserActions extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    let lock = new Auth0Lock(clientId, domain)
    this.lock = lock
    lock.on('authenticated', authResult => {
      console.log('authResult', authResult)
      lock.getUserInfo(authResult.accessToken, (error, profile) => {
        console.log('user profile: ', profile)
        if (error) {
          // Handle error
          // TODO: do something useful here.
          console.log('oh noes!', error)
        }
        const authLink = new ApolloLink((operation, forward) => {
          operation.setContext(() => ({
            headers: {
              authorization:
                authResult && authResult.accessToken
                  ? `JWT ${authResult.accessToken}`
                  : null,
            },
          }))
          console.log('Authlink added token:', `JWT ${authResult.accessToken}`)

          return forward(operation)
        })

        // Replace the clients Link with the composed authlink/httplink
        client.link = authLink.concat(client.link)

        console.log('creating mutation')
        const mutation = {
          mutation: gql`
            mutation($email: Email!, $firstName: String!, $lastName: String!) {
              addUser(
                user: {
                  email: $email
                  firstName: $firstName
                  lastName: $lastName
                }
              ) {
                email
              }
            }
          `,
          variables: {
            email: profile.email,
            firstName: profile.given_name,
            lastName: profile.family_name,
          },
        }

        console.log('client? ', client)
        client.mutate(mutation).then((...args) => {
          console.log(args)
        })
        this.props.dispatch({ type: 'SET_USER', currentUser: profile })
      })
    })
  }
  render() {
    let { currentUser } = this.props

    return (
      <div>
        {!currentUser ? (
          <button onClick={() => this.lock.show()}>login</button>
        ) : (
          <button
            onClick={() =>
              this.props.dispatch({ type: 'SET_USER', currentUser: null })}>
            logout
          </button>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.authentication.currentUser,
})

export default connect(mapStateToProps)(UserActions)
