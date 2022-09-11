import React, { Component } from 'react'
import PokedexView from '../Pokedex/PokedexView'
import Pokemon from '../Pokedex/Pokemon'
import { PokemonData } from '../Pokedex/PokemonData'
import GetRandomObject from './components/GetRandomObject'
import Pokecard from './components/Pokecard'

class PokegameView extends Component {
  constructor() {
    super()
    this.state = { exp1: 0, exp2: 0, count: 0 }
  }
  render() {
    let hand1 = []
    let hand2 = [...PokemonData]

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random * hand2.length)
      let randPokemon = hand2.splice(randIdx, 1)[0]
      hand1.push(randPokemon)
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Pokegame</h2>
        <PokedexView pokedata={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <PokedexView pokedata={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    )
  }
}

export default PokegameView
