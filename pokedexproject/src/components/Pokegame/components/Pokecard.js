import React, { Component } from 'react'
import PadZeroes from '../PadZeroes'
import '../../Pokedex/Pokemon.css'

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props.pokedata
    return (
      <div className='pokemon'>
        <h1>{name}</h1>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${PadZeroes(
            id
          )}.png`}
          alt='Pokemon'
        />
        <h4>Type : {type}</h4>
        <h4>EXP : {base_experience}</h4>
      </div>
    )
  }
}

export default Pokecard
