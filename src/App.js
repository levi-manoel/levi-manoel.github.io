import { Routes, Route  } from 'react-router';

import EasterEgg from './pages/EasterEgg';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/levi-manoel" element={ <Home /> } />
        <Route path="/easter" element={ <EasterEgg /> } />
      </Routes>
    </div>
  );
}

export default App;
