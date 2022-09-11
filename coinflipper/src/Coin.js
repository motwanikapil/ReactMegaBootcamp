import React, { Component } from 'react'

export default class Coin extends Component {
  render() {
    return (
      <div>
        {this.props.side && (
          <img
            src={`https://jkscoinworld.com/wp-content/uploads/2018/05/1998-${this.props.side}-1.jpg`}
            alt='coin'
            width={'300px'}
            height={'300px'}
          />
        )}
      </div>
    )
  }
}
