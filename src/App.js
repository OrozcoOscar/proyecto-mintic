
import './App.css';
// import Menu from './components/Menu';
// import Menu2 from './components/Menu2';


import MainRp from './components/MainRp';
import MainRv from './components/MainRv';


import MainMp from './components/MainMp';
import MainMv from './components/MainMv';
import MainMc from './components/MainMc';

import MainP from './components/MainP';
import MainAdmin from './components/MainAdmin';

import Login from './components/Login';
import Singup from './components/Singup';

// import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/login">
            <Login/>
          </Route> 
          <Route path="/singup">
            <Singup/>
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
          <Route path="/admin">
            <MainAdmin/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
