import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import EasterEgg from './pages/EasterEgg';
import NiverDenis from './pages/NiverDenis';

import './App.css';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/easter" component={EasterEgg} />
        <Route exact path="/denis" component={NiverDenis} />
       </Switch>
    </div>
  );
}

export default App;
