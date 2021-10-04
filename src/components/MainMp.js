import React from "react";
import Menu from './Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from 'react';

function MainMp(props){
    const vBotones = [{nombre:"Home",ruta:"/admin"},{nombre:"Name",ruta:"#"},{nombre:"Log out",ruta:"/login"}]

    const [dropdown,setDropdown] = useState(false);
    const [dropdown1,setDropdown1] = useState(false);
    const [dropdown2,setDropdown2] = useState(false);
    
    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }
    const abrirCerrarDropdown1=()=>{
        setDropdown1(!dropdown1);
    }
    const abrirCerrarDropdown2=()=>{
        setDropdown2(!dropdown2);
    }
    return(
        <div className="Padre">

        <Menu botones={vBotones}/>
        <div className="container cent py-5">
            
            <h1>PRODUCTOS</h1>

            <div className="cent py-5">
                <div className="container-fluid">
                    <form className="d-flex">
                    <input className="form-control buscador me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <h3>Resultados</h3>

            <div className="cent my-4 curvo">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>20,000</td>
                            <td>32</td>
                            <td>
                            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                                    <DropdownToggle>
                                        Opciones
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem>Accion1</DropdownItem>
                                        <DropdownItem>Accion1</DropdownItem>
                                        <DropdownItem>Accion1</DropdownItem>
                                    </DropdownMenu>
                                    
                                </Dropdown>
                            </td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>40,000</td>
                            <td>14</td>
                            <td>
                            <Dropdown isOpen={dropdown1} toggle={abrirCerrarDropdown1}>
                                    <DropdownToggle>
                                        Opciones
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem>Accion1</DropdownItem>
                                        <DropdownItem>Accion1</DropdownItem>
                                        <DropdownItem>Accion1</DropdownItem>
                                    </DropdownMenu>
                                    
                                </Dropdown>
                            </td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>25,000</td>
                            <td>2</td>
                            <td>
                            <Dropdown isOpen={dropdown2} toggle={abrirCerrarDropdown2}>
                                    <DropdownToggle>
                                        Opciones
                                    </DropdownToggle>

                                    <DropdownMenu>
                                        <DropdownItem>Accion1</DropdownItem>
                                        <DropdownItem>Accion1</DropdownItem>
                                        <DropdownItem>Accion1</DropdownItem>
                                    </DropdownMenu>
                                    
                                </Dropdown>
                            </td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        
    );
}

export default MainMp;