import React, { Component } from 'react'
import './ColorBox.css'
import { randomColorGenerator } from './helpers'

export default class ColorBox extends Component {
  state = {
    color: this.props.color,
  }
  getColor = () => {
    this.setState({ color: randomColorGenerator(this.state.color) })
  }
  render() {
    return (
      <div className='box'>
        <button
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: `${this.state.color}`,
            border: '0px',
          }}
          onClick={this.getColor}
        ></button>
      </div>
    )
  }
}
