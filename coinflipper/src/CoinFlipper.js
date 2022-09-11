import React, { Component } from 'react'
import Coin from './Coin'

class CoinFlipper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      side: '',
      heads: 0,
      tails: 0,
      tosses: 0,
    }
    this.flipCoin = this.flipCoin.bind(this)
  }
  flipCoin() {
    if (this.state.side === '') {
      this.setState({ side: 'a', tosses: 1, heads: 1 })
    } else {
      let val = Math.floor(Math.random() * 10 + 1) % 2 === 0 ? 0 : 1
      console.log(val)
      if (val === 0)
        this.setState((curState) => {
          return {
            side: 'a',
            heads: curState.heads + 1,
            tosses: curState.tosses + 1,
          }
        })
      else
        this.setState((curState) => {
          return {
            side: 'b',
            tails: curState.tails + 1,
            tosses: curState.tosses + 1,
          }
        })
    }
  }
  render() {
    return (
      <div>
        <h1>CoinFlipper</h1>
        <Coin side={this.state.side} />
        <button className='btn' onClick={this.flipCoin}>
          Flip Me
        </button>
        <h3>
          Out of {this.state.tosses} , there have been {this.state.heads} heads
          and {this.state.tails} tails
        </h3>
      </div>
    )
  }
}

export default CoinFlipper
