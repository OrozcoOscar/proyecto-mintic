import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {BotonesRegistroP,SetQuery} from "./BotonesMenu"
import {validToken, setProductos,getProductos} from './requestAPI';
import fondo from './assest/fondoVino.jpeg';


export default function RegistroProducto(props){
  
    const [user, setUser] = useState({name:"",rol:0})

    const [formulario,setFormulario]= useState({modificar:false})


    const upDateFormulario = (key,value) =>{
        formulario[key] = value;
        setFormulario({...formulario});
    }
    
    useEffect(() => {
        if(window.Get()){
            let token= window.Get().t
            let idProduct = window.Get().product
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==2){
                    BotonesRegistroP[1].nombre=e.user.name
                    BotonesRegistroP.map(b=>SetQuery(b,"t",token))
                    setUser({...e.user})
                    if(idProduct){
                        
                        getProductos({...e.user},(e)=>{
                            e.map(v =>{
                                if(v._id === idProduct){
                                    formulario.modificar = true
                                    formulario.nombre = v.nombre;
                                    formulario.precio = v.precio
                                    formulario.cantidad = v.cantidad
                                    formulario.estados = v.estados
                                    
                                    setFormulario({...formulario,idProduct})
                                    
                                }
                            })
                            
                        })
                    }
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
        <div className="Padre" style = {{backgroundImage:`url(${fondo})`,backgroundRepeat  : 'no-repeat',backgroundSize: 'cover'}}>

        <Menu botones={BotonesRegistroP}  colores = "red" />
        <div className="container cent py-5">
            <h1 style = {{color:"red"}}>PRODUCTOS</h1>

            <form className="form-plant pColor1" onSubmit = {(e)=>e.preventDefault()}>
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
                    <select defaultValue = {formulario.estados}  onChange = {e =>upDateFormulario("estados",e.target.value)}>
                        <option >Seleccionar</option>
                        {
                            (()=>{
                                if(formulario.estados == "1"){
                                    return <option selected value="1">Disponible</option>
                                }else  return <option value="1">Disponible</option>
                            })()
                        }
                        {
                            (()=>{
                                if(formulario.estados == "2"){
                                    return <option selected value="2">No disponible</option>
                                }else  return <option value="2"> No disponible</option>
                            })()
                        }
                        
                    </select>
                </div>
                <button type="button" className="btn btn-danger" onClick ={()=> {setProductos(formulario,(e)=> (e.est === 400)? alert(e.msg): window.location="/modificar-productos?t="+user.token )}} >Agregar</button>
            </form>
            
        </div>
    </div>    
    );
}
