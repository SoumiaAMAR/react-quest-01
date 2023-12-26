import PropTypes from "prop-types";
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
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
export default PokemonCard;
