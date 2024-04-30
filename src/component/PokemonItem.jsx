import React from 'react'
import { useNavigate } from 'react-router-dom'

function PokemonItem({name, id}) {

    const navigate = useNavigate();

  return (
    <div className='pokemon-item'
        onClick={() => {
            navigate("/pokemons/" + id)
    }}>
        <h1>{name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id+1}.png`} alt={name} />
    </div>
  )
}

export default PokemonItem