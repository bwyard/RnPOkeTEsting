import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../PokemonContext";

const url = 'https://pokeapi.co/api/v2/pokemon?limit=25'

const PokemonsList = () => {
    const {
        state,
        capture,
        addPokemons
    } = useContext(PokemonContext)

    useEffect(() => {
        const fetchPokemons = async () => {
          const response = await fetch(url);
          const data = await response.json();
          addPokemons(data.results); // update the pokemons list with this data
        };
      
        fetchPokemons();
      }, []);
    

    return(
        <div className="pokemons-list">
            <h2>Pokemons List</h2>

            {state.pokemons.sort((a,b)=>(a.name.toLowerCase()>b.name.toLowerCase()) ?1:-1).map((pokemon) =>
            <div key={`${pokemon.id}-${pokemon.name}`}>
                <div>
                    <span>{pokemon.name.toUpperCase().substr(0,1).concat(pokemon.name.substr(1))}</span>
                    <button onClick={capture(pokemon)}>Capture</button>
                </div>
            </div>)}
        </div>
    )
}

export default PokemonsList