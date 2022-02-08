import { Routes, Route  } from 'react-router';

import Home from './pages/Home';
import EasterEgg from './pages/EasterEgg';
import NiverDenis from './pages/NiverDenis';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/levi-manoel" element={ <Home /> } />
        <Route path="/levi-manoel/easter" element={ <EasterEgg /> } />
        <Route path="/levi-manoel/denis" element={ <NiverDenis /> } />
      </Routes>
    </div>
  );
}

export default App;
