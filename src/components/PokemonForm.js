import { generateID } from "../helper/generateID"

import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../PokemonContext";

const  PokemonForm =()=>  {
    const [pokemonName, setPokemonName]= useState()
    const { addPokemon } = useContext( PokemonContext )

    const handleNameOnChange= (e) => setPokemonName(e.target.value)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addPokemon({
            id: generateID(),
            name: pokemonName
        })
        console.log(`pokemon ${pokemonName} added`)
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type='text' placeholder='Pokemon Name' onChange={handleNameOnChange} />
            <input type='submit' value='Add' />
        </form>
    )
}

export default PokemonForm