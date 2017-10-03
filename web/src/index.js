import React, { Component } from 'react'
import { render } from 'react-dom'
import Logo from './components/Logo'
import MenuBar from './components/MenuBar'
import { css, injectGlobal } from 'emotion'

injectGlobal`
	body {
		margin: 0;
    background-color: #5ab6b2;
    height: 100%;
	}
`
const white = css`color: #fff;`

const mainstyle = css`
  font-family: sans-serif;
  padding: 4em;
  text-align: center;
  height: 100%;
`


class App extends Component {
  render() {
    return (
      <main className={mainstyle}>
        <MenuBar />
        <br />
        <Logo width="40em" />
        <h2 className={white}>Coming soon.</h2>
      </main>
    )
  }
}

render(<App />, document.querySelector('#app'))
