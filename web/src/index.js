import React, { Component } from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import Title from './components/Title'

injectGlobal`
  body {
    margin: 0;
  }
`

class App extends Component {

  render() {
    return (
      <main>
        <Title>Spothire</Title>
      </main>
    )
  }
}

render(<App />, document.querySelector('#app'))
