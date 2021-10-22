import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import {BotonesModificarP,SetQuery} from './BotonesMenu';
import {getProductos,validToken,upDateStatusProducto} from './requestAPI';


function ModificarProductos(props){
    const [user, setUser] = useState({name:"",rol:0})
    
    const [productos,setProductos] = useState([]);
    
    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if( e.user.rol==1 || e.user.rol==2){
                    BotonesModificarP[2].nombre=e.user.name
                    BotonesModificarP.map(b=>SetQuery(b,"t",token))
                    setUser({...e.user})
                    
                    getProductos({...e.user},(e)=>{
                        setProductos(e)
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
        if(productos[i].estOpc){
            productos[i].estOpc=false
        }else{
            for (let e = 0; e < productos.length; e++) {
                productos[e].estOpc=false
            }
            productos[i].estOpc=true
        }
        setProductos([...productos])
    }
    return(
        <div className="Padre">

        <Menu botones={BotonesModificarP} user={user}/>
        <div className="container cent py-5">
            
            <h1>MODIFICAR PRODUCTOS</h1>

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
                    {
                            productos.map((v,i)=>(
                                <tr key={i}>
                                    <th scope="row">{v.nombre}</th>
                                    <td>{v.precio}</td>
                                    <td>{v.cantidad}</td>
                                    <td>
                                    
                                    <select defaultValue = {v.estados}  onChange = {e =>{upDateStatusProducto({user:{...v,estados:e.target.value},admin:user})}}>
                                        
                                        <option >Seleccionar</option>
                                        <option value="1">Disponible</option>
                                        <option value="2">No disponible</option>
                                    </select>
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

export default ModificarProductos;