export const CAPTURE = 'CAPTURE'
export const RELEASE = 'RELEASE'
export const  ADD_POKEMON =  'ADD_POKEMON'
export const ADD_POKEMONS = 'ADD_POKEMONS'

const getCapturedPokemons =(capturedPokemons, releasedPokemon) =>
    capturedPokemons.filter(pokemon  => pokemon !== releasedPokemon)

const releasedPokemon = (releasedPokemon, state) => ({
    pokemons: [...state.pokemons, releasedPokemon],
    capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
})  

const getPokemonsList =  (pokemons, capturedPokemon)=>
    pokemons.filter(pokemon =>  pokemon!== capturedPokemon)

const capturePokemon = (pokemon, state) => ({
    pokemons: getPokemonsList(state.pokemons, pokemon),
    capturedPokemons: [...state.capturedPokemons,pokemon]
})

const addPokemon = (pokemon, state) => ({
    pokemons: [...state.pokemons, pokemon],
    capturedPokemons: state.capturedPokemons
  });

const addPokemons = (pokemons, state) => ({
    pokemons: pokemons,
    capturedPokemons: state.capturedPokemons
  });

export const pokemonReducer = (state,action) => {
    switch (action.type) {
        case CAPTURE:
            return capturePokemon(action.pokemon, state)
        case RELEASE:
            return releasedPokemon(action.pokemon,state)
        case ADD_POKEMON:
            return addPokemon(action.pokemon, state)
        case ADD_POKEMONS:
            return addPokemons(action.pokemons, state)
        default:
            return state;
    }
}