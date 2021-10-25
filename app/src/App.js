import './App.css';
import React,{useState,useEffect} from "react"
import RegistroProducto from './components/RegistroProducto';
import RegistroVenta from './components/RegistroVenta';


import ModificarProductos from './components/ModificarProductos';
import Ventas from './components/Ventas';
import Usuarios from './components/Usuarios';

import Productos from './components/Productos';
import MainAdmin from './components/MainAdmin';

import Login from './components/Login';
import LogOut from './components/LogOut';
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
          <Route path="/logout">
          <LogOut/>
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
