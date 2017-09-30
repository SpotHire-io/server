import React, { Component } from 'react'
import { render } from 'react-dom'
import Logo from './components/Logo'
import { injectGlobal } from 'styled-components'

injectGlobal`
	body {
		margin: 0;
		background-color: #5ab6b2;
    color: #fff;
    font-family: sans-serif;
	}
  main {
		padding: 4em;:w
		text-align: center;
	}
`

class App extends Component {
  render() {
    return (
      <main style={{}}>
        <Logo width="40em" />
        <h2>Coming soon.</h2>
      </main>
    )
  }
}

render(<App />, document.querySelector('#app'))
