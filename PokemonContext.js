import React, { createContext, useReducer, useState } from "react";
import { pokemonReducer } from "./PokemonReducer";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
    const defaultState = {
        pokemons: [
          { id: 1, name: 'Bulbasaur' },
          { id: 2, name: 'Charmander' },
          { id: 3, name: 'Squirtle' }
        ],
        capturedPokemons: []
      };

    const [state, dispatch] =  useReducer(pokemonReducer, defaultState)
    
    const { pokemons, capturedPokemons}= state

    const capture = (pokemon) => () => {
        dispatch({ type: 'CAPTURE', pokemon });
    };

    const release = (pokemon) => () => {
        dispatch({ type: 'RELEASE', pokemon });
    };

    

    const providerValue = {
        pokemons,
        capturedPokemons,
        release,
        capture
    }

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
}

