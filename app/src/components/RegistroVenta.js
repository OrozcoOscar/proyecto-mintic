import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {validToken,searchProducto,setVentas,getVentas} from './requestAPI';
import {BotonesRegistroV,SetQuery,} from "./BotonesMenu"
import fondo from './assest/fondoRojo.jpeg';


export default function RegistroVenta(props){

    const [formulario,setFormulario]= useState({modificar:false})

    const [user, setUser] = useState({name:"",rol:0})

    const [productos,setProductos] = useState([]);


    const upDateFormulario = (key,value) =>{
        formulario[key] = value;
        setFormulario({...formulario});
    }

    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            let idVenta = window.Get().vent
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==1 ||e.user.rol==2){
                    BotonesRegistroV[2].nombre=e.user.name
                    BotonesRegistroV.map(b=>SetQuery(b,"t",token))
                    setUser({...e.user})
                    if(idVenta){
                        
                        getVentas({...e.user},(e)=>{
                            e.map(v =>{
                                if(v._id === idVenta){
                                    formulario.modificar = true
                                    formulario.producto = v.productoID.nombre
                                    formulario.productoID = v.productoID._id
                                    formulario.fecha = v.fecha
                                    formulario.valor = v.valor
                                    formulario.cantidad = v.cantidad
                                    formulario.estados = v.estados
                                    
                                    setFormulario({...formulario,idVenta})
                                    
                                    
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

    const busqueda = (sh) =>{
        if(sh.length > 1){
            searchProducto({search:sh,user} , (e)=>{
                setProductos([...e]);
            })
        }else{
            setProductos([]);
        }
        
    }
    return(
        <div className="Padre" style = {{backgroundImage:`url(${fondo})`,backgroundRepeat  : 'no-repeat',backgroundSize: 'cover'}}>
        <Menu botones={BotonesRegistroV} user = {user} colores ={"white"}/>
        <div className="container cent py-5">
            <h1 style = {{color:"white"}}>VENTAS</h1>

            <form className="form-plant pColor"  onSubmit = {(e)=>e.preventDefault()} style = {{color:"white"}}> 
                <div className="dist2">
                    
                    <div className="mb-3">
                        <label for="idDescripcion" className="form-label">Nombre del producto:</label>
                        {
                            (()=>{

                                if(formulario.modificar){

                                    return <input readOnly autocomplete="off" value = {formulario.producto} onChange = {e =>{upDateFormulario("producto",e.target.value)
                                    busqueda(formulario.producto)
                                    }
                                }  type="text" className="form-control" id="idDescripcion"/>
                                
                                }else  return <input  autocomplete="off" value = {formulario.producto} onChange = {e =>{upDateFormulario("producto",e.target.value)
                                busqueda(formulario.producto)
                                }
                            }  type="text" className="form-control" id="idDescripcion"/>
                            })()
                        }
                        <div className ="blockList" style={{color:'black'}}>
                            {   
                                
                                productos.map((p,e)=>{
                                    return <div onClick ={()=>{
                                        upDateFormulario("producto",p.nombre)
                                        upDateFormulario("idProducto",p._id)
                                        upDateFormulario("valor",p.precio)
                                        setProductos([])
                                    }}>{p.nombre}</div>
                                })
                                
                                
                            }
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="idvalor" className="form-label">Cantidad:</label>
                        <input value = {formulario.cantidad} onChange = {e =>upDateFormulario("cantidad",e.target.value)}  type="text" className="form-control" id="idcantidad"/>
                        
                    </div>
                </div>
                <div className="dist2">
                    <div className="mb-3">
                        <label for="idvalor" className="form-label">Fecha:</label>
                        <input value = {formulario.fecha} onChange = {e =>upDateFormulario("fecha",e.target.value)}  type="date" className="form-control" id="idvalor"/>
                        
                    </div>
                </div>
                
                <div className="mb-3">
                    <label for="idvalor"  className="form-label">Valor de compra:</label>
                    <input readOnly value = {formulario.valor} onChange = {e =>upDateFormulario("valor",e.target.value)}  type="text" className="form-control" id="idvalor"/>
                </div>
                <div className="mb-3">
                    <label for="idEstado" className="form-label">Estado:</label>
                    <select defaultValue = {formulario.estados}  onChange = {e =>upDateFormulario("estados",e.target.value)}>
                        <option >Seleccionar</option>
                        {
                            (()=>{
                                if(formulario.estados == "1"){
                                    return <option selected value="1">En proceso</option>
                                }else  return <option value="1">En proceso</option>
                            })()
                        }
                        {
                            (()=>{
                                if(formulario.estados == "2"){
                                    return <option selected value="2">Cancelada</option>
                                }else  return <option value="2">Cancelada</option>
                            })()
                        }
                        {
                            (()=>{
                                if(formulario.estados == "3"){
                                    return <option selected value="3">Entregada</option>
                                }else  return <option value="3">Entregada</option>
                            })()
                        }
                    </select>
                </div>
                
            </form>
            
        <button type="button" className="btn btn-danger" onClick ={()=> {setVentas({venta:formulario,user},(e)=> (e.msg)? alert(e.msg): window.location="/ventas?t="+user.token )}} >Agregar</button>
        </div>
    </div>    
    );
}

