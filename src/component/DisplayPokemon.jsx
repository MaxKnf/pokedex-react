import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TypesList } from './TypesList';
import pokeballgrey from "../static/images/Pokeball-gray.png"
import "./style/DisplayPokemon.css"

function DisplayPokemon() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const parsedId = parseInt(id, 10) + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parsedId}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [parsedId]);

  if (!pokemonData) {
    return <div style={{margin:"300px"}}>Loading...</div>;
  }

  
  const mainType = pokemonData.types[0].type.name;
  let secondType 

  if (pokemonData.types.length > 1) {
    secondType = pokemonData.types[1].type.name;  
  }

  
  const typeInfo = TypesList.find(type => type.type === mainType);
  const typeInfo2 = TypesList.find(type => type.type === secondType);
  const backgroundColor = typeInfo ? typeInfo.colour : 'white';
  const backgroundColor2 = typeInfo2 ? typeInfo2.colour : 'white';
  const heightInMeters = (pokemonData.height / 10).toFixed(1); 
  const weightInKg = (pokemonData.weight / 10).toFixed(1);

  return (
    <div className='display-pokemon' style={{ backgroundColor, padding: "150px 0px", color:"white", display:"flex", flexDirection:"column", alignItems:"strech", flexWrap:"nowrap" }}>
      <div className='pkm-header'>
        <Link to={parsedId === 1 ? '#' : `/pokemons/${parsedId-2}`} className='w3-btn w3-round-xxlarge' style={{fontSize:"1.4rem"}}><i class="fa fa-arrow-left"></i></Link>
        <h1 style={{textTransform:"uppercase", fontFamily: "Lexend", fontSize:"3rem", margin:"20px 0px" }}>{pokemonData.name}</h1><Link to={`/pokemons/${parsedId}`} className='w3-btn w3-round-xxlarge' style={{fontSize:"1.4rem"}}><i class="fa fa-arrow-right"></i></Link> 
      </div>
      
      <div className='caracteristics-container' >

        <div className='caracteristics' class=" w3-round-xxlarge" >

          <div class="w3-container w3-section" style={{display:"flex", flexDirection:"column", flexWrap:"wrap",justifyContent:"space-evenly", alignItems:"center"}}>
            <h2 tyle={{width:"80%"}}>Types :</h2>
            <div class="w3-card w3-round-xxlarge" style={{backgroundColor:backgroundColor, padding:"20px 0px", width:"45%", fontSize:"1.3rem"}}>{mainType}</div>
            {secondType && <div class="w3-card w3-round-xxlarge" style={{backgroundColor:backgroundColor2, padding:"20px 0px", width:"45%", fontSize:"1.3rem"}} >{secondType}</div>}
          </div>

          <div class="w3-container w3-section" style={{display:"flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"center", alignItems:"center"}}>
            <h2 style={{width:"60%"}}>Caracteristics :</h2>
            <div class="w3-card w3-round-xxlarge" style={{padding:"20px 0px", width:"45%", fontSize:"1.3rem", backgroundColor:"#90caf9"}}><span>height: </span>{heightInMeters}m</div>
            <div class="w3-card w3-round-xxlarge" style={{padding:"20px 0px", width:"45%", fontSize:"1.3rem", backgroundColor:"#e57373"}}><span>weight: </span>{weightInKg}kg</div>
          </div>

          <div class="w3-container w3-section" style={{display:"flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"center", alignItems:"center"}}>
            <h2 style={{width:"60%"}}>Abillities :</h2>
            {pokemonData.abilities.map((ability, index) => (
              <div class="w3-card w3-round-xxlarge" style={{ fontSize:"1.1rem", backgroundColor:"#455a64", width:"45%", padding:"20px 0px",margin:"5px"}} key={index}>{ability.ability.name}</div>
            ))}
          </div>
        </div>

        <img className='pkm-img w3-card' src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} />

      </div>

      <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center",margin:"100px 0px"}}>
          <h2 style={{margin:"20px"}}>Stats</h2>
          <div className='statistics hp' class="w3-card w3-round-xxlarge" style={{width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px", margin:"5px 0px", backgroundColor:"#1b5e20"}}><span>HP</span><span>{pokemonData.stats[0].base_stat}</span></div>
          <div className='statistics atk' class="w3-card w3-round-xxlarge" style={{width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px", margin:"5px 0px", backgroundColor:"#b71c1c"}}><span>ATK</span><span>{pokemonData.stats[1].base_stat}</span></div>
          <div className='statistics def' class="w3-card w3-round-xxlarge" style={{width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px", margin:"5px 0px", backgroundColor:"#0d47a1"}}><span>DEF</span><span>{pokemonData.stats[2].base_stat}</span></div>
          <div className='statistics s-atk' class="w3-card w3-round-xxlarge" style={{width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px", margin:"5px 0px", backgroundColor:"#d50000"}}><span>S.ATK</span><span>{pokemonData.stats[3].base_stat}</span></div>
          <div className='statistics s-def' class="w3-card w3-round-xxlarge" style={{width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px", margin:"5px 0px", backgroundColor:"#2196f3"}}><span>S.DEF</span><span>{pokemonData.stats[4].base_stat}</span></div>
          <div className='statistics spd' class="w3-card w3-round-xxlarge" style={{width:"50%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px", margin:"5px 0px", backgroundColor:"#4a148c"}}><span>SPD</span><span>{pokemonData.stats[5].base_stat}</span></div>  
      </div>
       
    </div>
  );
}

export default DisplayPokemon;
