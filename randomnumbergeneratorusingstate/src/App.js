import React, { Component } from 'react'
import './App.css'
import Clicker from './Clicker'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <h1>Random Number Generator</h1>
        </div>
        <div>
          <Clicker />
        </div>
      </div>
    )
  }
}

export default App
