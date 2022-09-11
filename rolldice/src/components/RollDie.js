import React, { Component } from 'react'
import Die from './Die'
import './RollDie.css'

class RollDie extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  }
  constructor(props) {
    super(props)
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false,
    }

    this.roll = this.roll.bind(this)
  }

  roll() {
    // Pick two new rolls
    // Set the state with that rolls
    let die1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    let die2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

    this.setState({ die1, die2, rolling: true })

    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }
  // generateRandomFace() {
  //   let arr = ['one', 'two', 'three', 'four', 'five', 'six']
  //   return arr[Math.floor(Math.random() * arr.length)]
  // }
  render() {
    return (
      <div>
        <div className='RollDice'>
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <div>
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
          </button>
        </div>
      </div>
    )
  }
}

export default RollDie
