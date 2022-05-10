import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import NiverDenis from './pages/NiverDenis';
import Sobre from './pages/Sobre';

import './App.css';
import Projetos from './pages/Projetos';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/denis" component={NiverDenis} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/projetos" component={Projetos} />
        <Route
          exact
          path="/linkedin"
          component={() => {
            window.location.replace('https://linkedin.com/in/levi-manoel');
            return null;
          }}
        />
        <Route
          exact
          path="/github"
          component={() => {
            window.location.replace('https://github.com/levi-manoel');
            return null;
          }}
        />
       </Switch>
    </div>
  );
}

export default App;
