import React, { Component } from 'react'
import './Pokemon.css'
class Pokemon extends Component {
  render() {
    const { id, name, type, base_experience } = this.props.pokedata
    return (
      <div className='pokemon'>
        <h1>{name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt='pokemon'
        />
        <h4>Type : {type}</h4>
        <h4>Exp : {base_experience}</h4>
      </div>
    )
  }
}

export default Pokemon
