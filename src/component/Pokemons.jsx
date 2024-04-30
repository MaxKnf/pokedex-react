import React from "react";

import PokemonItem from "./PokemonItem";
import PokemonList  from "./PokemonList";


function Pokemon() {
    const pokemonData = PokemonList(); 
    
    return (
        <div className='all-pokemons'>
            <h1>Pokemon</h1>
            <div className='pokemon-list'>
                {pokemonData.map((pokemon, idx) => (
                    <PokemonItem key={idx} id={idx} name={pokemon.name} />
                ))}
            </div>
        </div>
    )
}
  
  export default Pokemon

































// function Pokemons() {

//     const url = "https://pokeapi.co/api/v2/pokemon/?limit=1025";
//     const [data, setData] = useState([]);

//     const fetchInfo = () => {
//         return fetch(url)
//           .then((res) => res.json())
//           .then((d) => setData(d.results));
//     }
    
    
//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     console.log(data[1])
    
//     return (
//         <div >
//             <h1>Pokemons</h1>
//             <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
//             <div style={{display:"flex", width:"100%"}}>
//                 {data.map((pokemon, index) => (
//                     <div
//                         key={index}
//                         style={{
//                             width: "30%"
//                         }}
//                     >
//                         <p style={{ fontSize: 20, color: 'black' }}>{pokemon.url.split("/")[6]}</p>
//                         <p style={{ fontSize: 20, color: 'black' }}>{pokemon.name}</p>
//                         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt="" />
                        
                        
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Pokemons;

