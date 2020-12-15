import React, { useContext } from "react";
import './App.css'
import { PokemonContext, PokemonProvider } from "./PokemonContext";
import CapturedPokemons from "./src/components/CapturedPokemons";
import PokemonForm from "./src/components/PokemonForm";
import PokemonsList from "./src/components/PokemonsList";

const App = () => (
  <div className='App'>
    <PokemonProvider>
      <div className="App">
        <PokemonsList />
        <CapturedPokemons />
      </div>
      <PokemonForm />
    </PokemonProvider>
  </div>
)

export default App