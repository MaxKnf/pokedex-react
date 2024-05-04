import React from "react";
import "./style/Pokemons.css"
import PokemonItem from "./PokemonItem";
import PokemonList  from "./PokemonList";



function Pokemon() {
    const pokemonData = PokemonList();
    
    
    console.log(pokemonData.map(pokemon => pokemon.name));
    
    
    return (
        <div className='all-pokemons' style={{marginTop: "90px"}}>
            <div>
                <button className="w3-btn w3-round-xxlarge"><a href="#1" style={{textDecoration:"none"}}>Gen 1</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#151" style={{textDecoration:"none"}}>Gen 2</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#250" style={{textDecoration:"none"}}>Gen 3</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#385" style={{textDecoration:"none"}}>Gen 4</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#492" style={{textDecoration:"none"}}>Gen 5</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#649" style={{textDecoration:"none"}}>Gen 6</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#721" style={{textDecoration:"none"}}>Gen 7</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#811" style={{textDecoration:"none"}}>Gen 8</a></button>
                <button className="w3-btn w3-round-xxlarge"><a href="#905" style={{textDecoration:"none"}}>Gen 9</a></button>
            </div>
            <div className='pokemon-list' 
            style={{              }}>
                {pokemonData.map((pokemon, idx) => (
                    <PokemonItem  className="pokemon-item" key={idx} id={idx} name={pokemon.name} />
                ))}
            </div>
        </div>
    )
}
  
  export default Pokemon


