import React from 'react'
import { useNavigate } from 'react-router-dom'
import pokeballgrey from "../static/images/Pokeball-gray.png"

function PokemonItem({name, id}) {

    const navigate = useNavigate();

  return (
    <div id={id} 
      className='pokemon-item w3-card w3-hover-shadow w3-border-red w3-round-xxlarge'
      style={{ backgroundColor: "#ff080c"}}
        onClick={() => {
            navigate("/pokemons/" + id)
    }}>
        <h2 style={{margin: "10px",fontSize: "1.3rem",textTransform: "uppercase", borderRadius: "90", color:"white", fontFamily: "Lexend"}}>{name}</h2>
        <img className='pkm-list-img' style={{ backgroundColor: "white", backgroundImage: `url(${pokeballgrey})`,backgroundSize:"100%", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id+1}.png`} alt={name} />
        <div style={{margin: "10px",fontSize: "1.3rem",textTransform: 'capitalize', borderRadius: "90"}}>#{id + 1}</div>
    </div>
  )
}

export default PokemonItem