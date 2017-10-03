import React from 'react'
import { css } from 'react-emotion'
import Logo from './Logo'
import Link from './Link'
import Nav from './Nav'

const LogoPadding = css`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const LogoContainer = () => (
  <div className={LogoPadding}>
    <Logo width="5em" />
  </div>
)

const MenuBar = () => (
  <Nav>
    <LogoContainer />
    <Link active>Newsfeed</Link>
    <Link>People</Link>
    <Link>Schedule</Link>
    <Link>Timesheet</Link>
  </Nav>
)

export default MenuBar
