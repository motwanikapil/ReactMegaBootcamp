import { Component } from 'react'
import Pokecard from '../Pokegame/components/Pokecard'
import './PokedexView.css'
class PokedexView extends Component {
  render() {
    let pokeData = this.props.pokedata
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>EXP : {this.props.exp}</h2>
        {this.props.isWinner === true ? (
          <h2 className='winner'>Winner</h2>
        ) : (
          <h2 className='loser'>Loser</h2>
        )}

        <div>
          {pokeData.map((pokemon) => {
            return <Pokecard pokedata={pokemon} key={pokemon.id} />
          })}
        </div>
      </div>
    )
  }
}

export default PokedexView
