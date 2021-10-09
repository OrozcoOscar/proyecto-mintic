import './App.css';

import RegistroProducto from './components/RegistroProducto';
import RegistroVenta from './components/RegistroVenta';


import ModificarProductos from './components/ModificarProductos';
import Ventas from './components/Ventas';
import Usuarios from './components/Usuarios';

import Productos from './components/Productos';
import MainAdmin from './components/MainAdmin';

import Login from './components/Login';
import Singup from './components/Singup';

import Reg from './components/reg';
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
            <RegistroProducto/>
          </Route>
          <Route path="/registro-venta">
            <RegistroVenta/>
          </Route>
          <Route path="/modificar-productos">
            <ModificarProductos/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route> 
          <Route path="/singup">
            <Reg/>
          </Route> 
          <Route path="/ventas">
            <Ventas/>
          </Route>
          <Route path="/usuarios">
            <Usuarios/>
          </Route>
          <Route path="/productos">
            <Productos/>
          </Route>
          <Route path="/admin">
            <MainAdmin/>
          </Route>
          <Route path="/">
          <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;