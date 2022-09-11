import React, { Component } from 'react'
import ColorBox from './ColorBox'
import data from './data'
import './ColorGrid.css'

class ColorGrid extends Component {
  render() {
    return (
      <div className='colorgrid'>
        {data.map((color) => (
          <ColorBox color={color} key={color} />
        ))}
      </div>
    )
  }
}

export default ColorGrid
