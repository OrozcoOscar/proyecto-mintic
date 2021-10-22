import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {BotonesRegistroP,SetQuery} from "./BotonesMenu"
import {validToken, setProductos} from './requestAPI';


export default function RegistroProducto(props){
  
    const [user, setUser] = useState({name:"",rol:0})

    const [formulario,setFormulario]= useState({})
    console.log(user,formulario.userID) 

    const upDateFormulario = (key,value) =>{
        formulario[key] = value;
        setFormulario({...formulario});
        console.log("Entro a formulario")
        console.log(formulario)
    }
    
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
    useEffect(()=>{
        setFormulario({userID:user["_id"]})
    },[user])
    
    return(
        <div className="Padre">

        <Menu botones={BotonesRegistroP}/>
        <div className="container cent py-5">
            <h1>REGISTRO DE PRODUCTOS</h1>

            <form className="form-plant" onSubmit = {(e)=>e.preventDefault()}>
                <div className="mb-3">
                    <label for="idProducto" className="form-label">Nombre del producto:</label>
                    <input value = {formulario.nombre}  onChange = {e =>upDateFormulario("nombre",e.target.value)} type="text" className="form-control" id="idProducto" aria-describedby="productoHelp"/>
                    <div id="productoHelp" className="form-text">Esto debe ser unico.</div>
                </div>
                <div className="mb-3">
                    <label for="idvalor" className="form-label">Valor Unitario:</label>
                    <input value = {formulario.precio} onChange = {e =>upDateFormulario("precio",e.target.value)}  type="text" className="form-control" id="idvalor"/>
                </div>
                <div className="mb-3">
                    <label for="idvalor" className="form-label">Cantidad:</label>
                    <input value = {formulario.cantidad}  onChange = {e =>upDateFormulario("cantidad",e.target.value)} type="text" className="form-control" id="idvalor"/>
                </div>
                <div className="mb-3">
                    <label for="idEstado" className="form-label">Estado:</label>
                    {/* <input type="text" className="form-control" id="idEstado"/> */}
                    <select defaultValue = {formulario.estados}  onChange = {e =>upDateFormulario("estados",e.target.value)}>
                        <option >Seleccionar</option>
                        <option value="1">Disponible</option>
                        <option value="2">No disponible</option>
                    </select>
                </div>
                <button type="button" className="btn btn-success" onClick ={()=> {setProductos(formulario,(e)=> (e.est === 400)? alert(e.msg): window.location="/productos?t="+user.token )}} >Agregar</button>
            </form>
            
        </div>
    </div>    
    );
}
