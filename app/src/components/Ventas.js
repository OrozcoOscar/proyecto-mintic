import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {getVentas} from './requestAPI';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import {validToken} from './requestAPI';

function Ventas(props){
     const [user, setUser] = useState({name:""})
    const vBotones = [{nombre:"Home",ruta:"/ventas"},{nombre:"Name",ruta:"#"},{nombre:"Log out",ruta:"/login"}]

    const [ventas,setVentas] = useState([]);
    useEffect(() => {
        let token=window.Get().t
        if(token){
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if( e.user.rol==1 || e.user.rol==2){
                    user.name=e.user.name
                    setUser({...user})
                    getVentas({},(e)=>{
                        setVentas(e)
                    })
                }else{
                    alert("No tienes los permisos necesarios")
                    window.location="/?t="+token
                }
            })
        }else{
            window.location="/"
        }
    }, [])
    function updateEst(i){
        if(ventas[i].estOpc){
            ventas[i].estOpc=false
        }else{
            for (let e = 0; e < ventas.length; e++) {
                ventas[e].estOpc=false
            }
            ventas[i].estOpc=true
        }
        setVentas([...ventas])
    }

    return(
        <div className="Padre">

        <Menu botones={vBotones}/>
        <div className="container cent py-5">
            <h1>VENTAS</h1>

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
                            <th scope="col">Fecha</th>
                            <th scope="col">Valor de Compra</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ventas.map((v,i)=>(
                                <tr key={i}>
                                    <th scope="row">{v.producto}</th>
                                    <td>{v.fecha}</td>
                                    <td>{v.valor}</td>
                                    <td>
                                    
                                    <Dropdown isOpen={v.estOpc} toggle={()=>{}} onClick={()=>updateEst(i)}>
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
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        
        </div>
    </div>
    
    );
    
}

export default Ventas;