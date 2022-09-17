import React, { Component } from 'react'

export default class NumberItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(evt) {
    this.props.remove(this.props.value)
  }
  render() {
    return (
      <div>
        {this.props.value}{' '}
        <button style={{ border: '0px' }} onClick={this.handleClick}>
          X
        </button>
      </div>
    )
  }
}
