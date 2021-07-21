// import logo from './logo.svg';
import './App.css';

import Pokemon from './components/Pokemon'

function App() {

  const pokemons = [
      {
          id: "#001",
          name: "Bulbasaur", 
          type: "Grass",
          image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png", 
      }, 
      {
          id: "#004",
          name: "Charmander", 
          type: "Fire",
          image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      }, 
      {
          id: "#007",
          name: "Squirtle",
          type: "Water",
          image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Pokemons</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <Pokemon pokemons={pokemons} />                
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
