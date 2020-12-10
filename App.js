import React, { useContext } from "react";
import './App.css'
import { PokemonContext, PokemonProvider } from "./PokemonContext";
import CapturedPokemons from "./src/components/CapturedPokemons";
import PokemonsList from "./src/components/PokemonsList";

const App = () => (
  <div className='App'>
    <PokemonProvider>
      <div className="App">
        <PokemonsList />
        <CapturedPokemons />
      </div>
    </PokemonProvider>
  </div>
)

export default App