import React, { useContext, useState } from "react";
import { PokemonContext } from "../../PokemonContext";

const CapturedPokemons = () => {
    const { capturedPokemons, release } = useContext(PokemonContext);
    return (
        <div className='pokedex'>
            <h2>Captured Pokemon</h2>

            {capturedPokemons.map((pokemon) =>
            <div key = {`${pokemon.id}-${pokemon.name}`}>
                <span>{pokemon.name.toUpperCase().substr(0,1).concat(pokemon.name.substr(1))}</span>
                <button onClick={release(pokemon)}>Release</button>
            </div>)}
        </div>
    )
}

export default CapturedPokemons