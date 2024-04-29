

import React, { useState, useEffect } from "react";

function Pokemons() {

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=1025";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
          .then((res) => res.json())
          .then((d) => setData(d.results));
    }
    
    
    useEffect(() => {
        fetchInfo();
    }, []);
    
    return (
        <div>
            <h1>Pokemons</h1>
            <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
            <center>
                {data.map((pokemon, index) => (
                    <div
                        key={index}
                        style={{
                        }}
                    >
                        <p style={{ fontSize: 20, color: 'black' }}>{pokemon.url.split("/")[6]}</p>
                        <p style={{ fontSize: 20, color: 'black' }}>{pokemon.name}</p>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt="" />
                        
                        
                    </div>
                ))}
            </center>
        </div>
    );
}

export default Pokemons;

