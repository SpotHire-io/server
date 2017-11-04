import React from 'react'
import Logo from './Logo'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'

import styles from '../css/Sidebar'

const Sidebar = ({ path, dispatch }) => (
  <div className={styles.sidebar}>
    <div className={styles.logo}>
      <NavLink to="/" exact>
        <Logo width="6.5em" />
      </NavLink>
    </div>

    <NavLink to="/dashboard" exact activeClassName={styles.active}>
      Dashboard
    </NavLink>

    <NavLink activeClassName={styles.active} to={{ type: 'NEWSFEED' }}>
      Newsfeed
    </NavLink>

    <NavLink activeClassName={styles.active} to={{ type: 'SCHEDULE' }}>
      Schedule
    </NavLink>
  </div>
)

const isActive = (actualPath, expectedPath) =>
  actualPath === expectedPath ? styles.active : ''

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default connect(mapStateToProps)(Sidebar)
