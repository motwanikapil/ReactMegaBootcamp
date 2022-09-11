import React, { Component } from 'react'

class BrokenClick2 extends Component {
  state = { clicked: false }
  handleClick = (e) => {
    // this is not javascript syntax this is done using babel and same for above line.
    if (this.state.clicked) this.setState({ clicked: false })
    else this.setState({ clicked: true })
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked!'}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default BrokenClick2
