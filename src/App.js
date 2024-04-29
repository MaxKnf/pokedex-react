import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Pokemons from './component/Pokemons';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        {/* <Route /> */}
      </Routes>
      
    </div>
  );
}

export default App;
