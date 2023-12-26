/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon }) => {
  const { imgSrc, name } = pokemon;

  return (
    <>
      <figure>
        {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </>
  );
};
export default PokemonCard;
