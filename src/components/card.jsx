import '../styles/cards.css';

function Card({ pokemon, onCardClick }) {
    const typeColors = {
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        psychic: "#F85888",
        normal: "#A8A878",
        fighting: "#C03028",
        rock: "#B8A038",
        ice: "#98D8D8",
        dragon: "#7038F8",
        fairy: "#EE99AC",
        ghost: "#705898",
        poison: "#A040A0",
        ground: "#E0C068",
        bug: "#A8B820",
        steel: "#B8B8D0",
        dark: "#705848",
        flying: "#A890F0",
    }

    const type = pokemon.types[0].type.name;
    const bgColor = typeColors[type];
    const pokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <div className="pokeCard" 
            style={{ backgroundColor: bgColor}}
            onClick={onCardClick}> 

            <div className="topRow">
                <p>{pokeName}</p>
                <p>HP: {pokemon.stats[0].base_stat}</p>
            </div>

            <div className="image">
                <img src={pokemon.sprites.front_default} 
                    alt={pokemon.name} />
            </div>

        </div>
    )
}

export default Card;
