import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
      return <div>Loading...</div>;
  }



  //On filtre les moves pour ne prendre que ceux des versions scarlet/violet
  const movesInScarletViolet = pokemonData.moves.filter(move =>
    move.version_group_details.some(group =>
        group.version_group.name === 'scarlet-violet'
    )
  );

  //Creation des listes de moves séparés par méthodes d'apprendtissage
  const movesByMethod = movesInScarletViolet.reduce((accumulator, move) => {
    const method = move.version_group_details.find(group =>
        group.version_group.name === 'scarlet-violet').move_learn_method.name;
    if (!accumulator[method]) {
        accumulator[method] = [];
    }
    accumulator[method].push(move);
    return accumulator;
  }, {});

  //On trie les listes, en mettant les moves appris par level up en premier
  const sortedMovesByMethod = Object.entries(movesByMethod).sort(([methodA], [methodB]) => {
    if (methodA === 'level-up') return -1;
    if (methodB === 'level-up') return 1;
    return 0;
  });

    return (
        <div>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} />
            <ul>
                {pokemonData.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
            {sortedMovesByMethod.map(([method, moves], index) => (
                <div key={index}>
                    <h3>{method}</h3>
                    <ul>
                        {moves.map((move, idx) => (
                            <li key={idx}>{move.move.name} (Learned at Level {move.version_group_details.find(group =>
                                group.version_group.name === 'scarlet-violet').level_learned_at})</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default DisplayPokemon;



