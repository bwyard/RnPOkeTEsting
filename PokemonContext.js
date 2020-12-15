import React, { createContext, useReducer, useState } from "react";
import { pokemonReducer } from "./PokemonReducer";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
    const defaultState = {
        pokemons: [],
        capturedPokemons: []
      };

    const [state, dispatch] =  useReducer(pokemonReducer, defaultState)
    
    const { capturedPokemons}= state

    const capture = (pokemon) => () => {
        dispatch({ type: 'CAPTURE', pokemon });
    };

    const release = (pokemon) => () => {
        dispatch({ type: 'RELEASE', pokemon });
    };
    
    const addPokemon = (pokemon) => {
        dispatch({type: 'ADD_POKEMON', pokemon})
    }

    const addPokemons = (pokemons) => {
        dispatch({ type: 'ADD_POKEMONS', pokemons });
    };

    

    const providerValue = {
        state,
        capturedPokemons,
        release,
        capture,
        addPokemon,
        addPokemons
    }

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
}

