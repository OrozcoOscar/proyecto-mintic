
import './App.css';
import Menu from './components/Menu';

import MainRp from './components/MainRp';
import MainRv from './components/MainRv';


import MainMp from './components/MainMp';
import MainMv from './components/MainMv';
import MainMc from './components/MainMc';

import MainP from './components/MainP';

import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Menu/>
        <Switch>
          <Route path="/registro-producto">
            <MainRp/>
          </Route>
          <Route path="/registro-ventas">
            <MainRv/>
          </Route>
          <Route path="/modificar-producto">
            <MainMp/>
          </Route>
          <Route path="/modificar-venta">
            <MainMv/>
          </Route>
          <Route path="/modificar-cliente">
            <MainMc/>
          </Route>
          <Route path="/productos">
            <MainP/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
