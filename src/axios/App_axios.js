import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import DisplayPokemon from './components/DisplayPokemon';

function App_axios() {
  const [pokemon, setPokemon] = useState( [] );

  const get20Pokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
     .then((response) => {
       setPokemon(response.data.results);
     })
     .catch((err)=>{
       console.log(err);
     })
  }
  
  useEffect(() => {
    get20Pokemon();
  }, []);


  return (
    <div className="App">
      <h1>Pokemon Axios Intro</h1>
      <DisplayPokemon pokemon={pokemon} />    
    </div>
  );
}

export default App_axios;
