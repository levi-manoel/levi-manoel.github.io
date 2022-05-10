import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import EasterEgg from './pages/EasterEgg';
import NiverDenis from './pages/NiverDenis';
import Sobre from './pages/Sobre';

import './App.css';
import Projetos from './pages/Projetos';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/easter" component={EasterEgg} />
        <Route exact path="/denis" component={NiverDenis} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/projetos" component={Projetos} />
       </Switch>
    </div>
  );
}

export default App;
