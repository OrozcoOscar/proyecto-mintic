import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {getVentas,validToken,upDateStatusVenta,searchVenta} from './requestAPI';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

import {BotonesVentas,SetQuery} from "./BotonesMenu";

function Ventas(props){
    const [user, setUser] = useState({name:"",rol:0})
    const [ventas,setVentas] = useState([]);
    const [consulta,setConsulta] = useState("");

    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==2 ||e.user.rol==1 ){
                    BotonesVentas[1].nombre=e.user.name
                    BotonesVentas.map(b=>SetQuery(b,"t",token))
                    setUser({...e.user})
                    getVentas({...e.user},(e)=>{
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

    const busqueda = (sh) =>{
        
        searchVenta({search:sh,user} , (e)=>{
            setVentas([...e]);
            
        })
}

    return(
        <div className="Padre">

        <Menu botones={BotonesVentas} user={user}/>
        <div className="container cent py-5">
            <h1>VENTAS</h1>

            <div className="cent py-5">
                <div className="container-fluid">
                    <form className="d-flex">
                    <input value = {consulta} onChange = {e =>{
                        setConsulta(e.target.value)
                        busqueda(e.target.value)
                    }} className="form-control buscador me-2" type="search" placeholder="Search" aria-label="Search"/>
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
                                    
                                    <th scope="row">{v.productoID.nombre}</th>
                                    <td>{v.fecha}</td>
                                    <td>${v.valor*v.cantidad}</td>
                                    <td>
                                    
                                    <select defaultValue = {v.estados}  onChange = {e =>{upDateStatusVenta({user:{...v,estados:e.target.value},admin:user})}}>
                                        
                                        <option >Seleccionar</option>
                                        <option value="1">En proceso</option>
                                        <option value="2">Cancelada</option>
                                        <option value="3">Entregada</option>
                                    </select>
                                    </td>
                                    <td><button className="btn btn-secondary" onClick ={()=>{window.location.href = "/registro-venta?t="+user.token+"&vent="+v._id}}>X</button></td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
                
            </div>
            <button type="button" className="btn btn-success" onClick ={()=>window.location.href = "/registro-venta?t="+user.token}>Agregar</button>
        </div>
    </div>
    
    );
    
}

export default Ventas;