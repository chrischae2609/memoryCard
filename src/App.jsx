import { useState, useEffect } from 'react'
import Game from "./components/game.jsx"
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState(null);

  function getRandomIds(count = 12, max = 151) {
    const ids = new Set();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * max) + 1);
    }
    return [...ids];
  }

  useEffect(() => {
    async function fetchRandom() {
      const ids = getRandomIds(12);
      const promises = ids.map(id => 
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
      );
      setPokemonList(await Promise.all(promises));
    }
    fetchRandom();
  }, []);

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <Game pokemonList={pokemonList} />
    </div>
  );
}

export default App
