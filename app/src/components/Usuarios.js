import React from "react";
import Menu from './Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from 'react';

function MainMc(props){
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
        
        <div>
        <Menu botones={vBotones}/>
        <div className="container cent py-5">
        <h1>USUARIOS</h1>
        
        <div className="cent py-5">
            <div className="container-fluid">
                <form className="d-flex">
                <input className="form-control buscador me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary btn-busc" type="submit">Search</button>
                </form>
            </div>
        </div>
        <h3>Resultados</h3>

        <div className="cent my-4 curvo">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Usuario</th>
                        <th scope="col">Documento</th>
                        <th scope="col">Fecha de Registro</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>dd/mm/aaaa</td>
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
                        <td>
                            <button className="btn btn-success mx-1">X</button>
                            <button class="btn btn-danger mx-1">O</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>dd/mm/aaaa</td>
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
                        <td>
                            <button className="btn btn-success mx-1">X</button>
                            <button class="btn btn-danger mx-1">O</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>dd/mm/aaaa</td>
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
                        <td>
                            <button className="btn btn-success mx-1">X</button>
                            <button class="btn btn-danger mx-1">O</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    </div>
    </div>
        
    );
}

export default MainMc;