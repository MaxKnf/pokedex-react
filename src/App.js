import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './component/Home';
import Pokemons from './component/Pokemons';
import DisplayPokemon from './component/DisplayPokemon';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Pokemons/>}/>        
        <Route path='/pokemons/:id' element={<DisplayPokemon/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

//  <Route path='/pokemons' element={<Pokemons/>}/> 