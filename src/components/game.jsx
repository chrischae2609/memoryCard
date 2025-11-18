import { useState, useEffect } from "react";
import Card from "./card.jsx";
import '../styles/game.css';

function Game({ pokemonList }) {
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [selected, setSelected] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (pokemonList) {
            setCards(pokemonList)
        }
    }, [pokemonList])

    if (!cards.length) return <p>Loading...</p>

    function clickedFunc(pokemon) {
        if (!selected.includes(pokemon.id)) {
            const newScore = score + 1;
            if (newScore === 1) {
                setGameOver(true);
            }
            setSelected([...selected, pokemon.id]);
            setScore(newScore);
        

            if (newScore > bestScore) {
                setBestScore(score + 1);
            }

        } else {
            setScore(0);
            setSelected([]);
        }


        const shuffled = [...cards];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        setCards(shuffled);
    }

    function restartGame() {
        setGameOver(false);
        setScore(0);
        setBestScore(0);
        setSelected([]);
    }

    if (gameOver) {
        return (
            <div className="gameOver">
                <h2>Game Over!</h2>
                <p>Your Score: {score}</p>
                <button onClick={restartGame}>Restart</button>
            </div>
        )
    }

    return (
        <div className="game">
            <div className="scores">
                <div>Score: {score}</div>
                <div>Best Score: {bestScore}</div>
            </div>
            <div className="cards">
                {cards.map((pokemon) => (
                    <Card 
                        key={pokemon.id} 
                        pokemon={pokemon} 
                        onCardClick={() => clickedFunc(pokemon)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Game;