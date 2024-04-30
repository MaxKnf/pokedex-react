import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Pokemons from './component/Pokemons';
import DisplayPokemon from './component/DisplayPokemon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path='/pokemons/:id' element={<DisplayPokemon/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
