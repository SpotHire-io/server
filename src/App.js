import React, { Component } from 'react'

class App extends Component {

  handleClick() {
    console.log('clicked.', this)
  }

  render() {
    let style = {
      width: '90%',
      margin: '4em auto',
    }

    return (
      <main style={style}>
        <h1 onClick={this.handleClick}>Spothire</h1>
      </main>
    )
  }
}

export default App
