import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {BotonesRegistroP,SetQuery} from "./BotonesMenu"
import {validToken} from './requestAPI';
export default function RegistroProducto(props){
    const [user, setUser] = useState({name:"",rol:0})
    useEffect(() => {
        if(window.Get()){
            let token= window.Get().t
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==1){
                    BotonesRegistroP[1].nombre=e.user.name
                    BotonesRegistroP.map(b=>SetQuery(b,"t",token))
                    setUser({...e.user})
                }else{
                    alert("No tienes los permisos necesarios")
                    window.location="/?t="+token
                }
            })
        }else{
            window.location="/"
        }
    }, [])
    return(
        <div className="Padre">

        <Menu botones={BotonesRegistroP}/>
        <div className="container cent py-5">
            <h1>REGISTRO DE PRODUCTOS</h1>

            <form className="form-plant">
                <div className="mb-3">
                    <label for="idProducto" className="form-label">Identificador de producto:</label>
                    <input type="text" className="form-control" id="idProducto" aria-describedby="productoHelp"/>
                    <div id="productoHelp" className="form-text">Esto debe ser unico.</div>
                </div>
                <div className="mb-3">
                    <label for="idDescripcion" className="form-label">Descripcion:</label>
                    <input type="text" className="form-control" id="idDescripcion"/>
                </div>
                <div className="mb-3">
                    <label for="idvalor" className="form-label">Valor Unitario:</label>
                    <input type="text" className="form-control" id="idvalor"/>
                </div>
                <div className="mb-3">
                    <label for="idEstado" className="form-label">Estado:</label>
                    <input type="text" className="form-control" id="idEstado"/>
                </div>
            </form>
            
        </div>
    </div>    
    );
}
