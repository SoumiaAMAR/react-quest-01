/* eslint-disable react/prop-types */
const NavBar = ({ pokemonIndex, pokemonList, setPokemonIndex }) => {
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
  return (
    <div>
      {" "}
      {pokemonIndex > 0 && <button onClick={previousPokemon}>prècedent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>suivant</button>
      )}
    </div>
  );
};

export default NavBar;
