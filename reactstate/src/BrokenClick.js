import React, { Component } from 'react'
import Button from './Button'

class BrokenClick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    if (this.state.clicked) this.setState({ clicked: false })
    else this.setState({ clicked: true })
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default BrokenClick
