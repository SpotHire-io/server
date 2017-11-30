import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auth0Lock from 'auth0-lock'
import { connect } from 'react-redux'

var clientId = 'GeAYDzx6xVk7L7Hev1zdO6u83aP1gX9U'
var domain = 'spothire.auth0.com'

class UserActions extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentUser: PropTypes.obj,
  }

  componentDidMount() {
    let lock = new Auth0Lock(clientId, domain)
    this.lock = lock
    lock.on('authenticated', authResult => {
      lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          console.log('oh noes!', error)
        }

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
