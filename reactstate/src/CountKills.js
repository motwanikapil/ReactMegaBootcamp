import React, { Component } from 'react'
import './CountKills.css'

class CountKills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.singleKill = this.singleKill.bind(this)
    this.tripleKill = this.tripleKill.bind(this)
  }
  singleKill() {
    this.setState({ count: this.state.count + 1 })
  }
  //   tripleKill() {
  //     this.setState({ count: this.state.count + 1 })
  //     this.setState({ count: this.state.count + 1 })
  //     this.setState({ count: this.state.count + 1 })
  //   } here this method will not work

  //   tripleKill() {
  //     this.setState((prevSt) => {
  //       return { count: prevSt.count + 1 }
  //     })
  //     this.setState((prevSt) => {
  //       return { count: prevSt.count + 1 }
  //     })
  //     this.setState((prevSt) => {
  //       return { count: prevSt.count + 1 }
  //     })
  //   } we can make this code more cleaner
  incrementCounter(prevSt) {
    return { count: prevSt.count + 1 }
  }
  tripleKill() {
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
  }
  render() {
    return (
      <div>
        <h1>This Component counts f*cking Kills!!!</h1>
        <h1>Count : {this.state.count}</h1>
        <button className='btn' onClick={this.singleKill}>
          Single Kill
        </button>
        <button className='btn' onClick={this.tripleKill}>
          Triple Kills
        </button>
      </div>
    )
  }
}

export default CountKills
