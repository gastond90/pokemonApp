import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Movies from './Components/Movies';
import { SearchBar } from './Components/SearchBar';
import Games from './Components/Games';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route  path = '/home' element = {<Home/>}/>
    <Route  path='/home/pokedex' element = {<SearchBar/>}/>
    <Route  path='/home/movies' element = {<Movies/>}/>
    <Route  path = '/home/games' element = {<Games/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
