import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const previousPokemon = () => {
    setPokemonIndex((previousIndex) =>
      previousIndex === 0 ? pokemonList.length - 1 : previousIndex - 1
    );
  };
  const nextPokemon = () => {
    setPokemonIndex((previousIndex) =>
      previousIndex === pokemonList.lenght - 1 ? 0 : previousIndex + 1
    );
  };
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonIndex > 0 && <button onClick={previousPokemon}>prècedent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>suivant</button>
      )}
    </div>
  );
};

export default App;
