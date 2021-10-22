import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {validToken,searchProducto,setVentas} from './requestAPI';
import {BotonesRegistroV,SetQuery} from "./BotonesMenu"



export default function RegistroVenta(props){
    const [formulario,setFormulario]= useState({})
    const [user, setUser] = useState({name:"",rol:0})
    const [productos,setProductos] = useState([]);

    const upDateFormulario = (key,value) =>{
        formulario[key] = value;
        setFormulario({...formulario});
    }

    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==2){
                    BotonesRegistroV[1].nombre=e.user.name
                    BotonesRegistroV.map(b=>SetQuery(b,"t",token))
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
    
    const busqueda = (sh) =>{
        if(sh.length > 1){
            searchProducto({search:sh,user} , (e)=>{
                setProductos([...e]);
            })
        }else{
            setProductos([]);
        }
        
    }
    console.log(formulario)
    return(
        <div className="Padre">
        <Menu botones={BotonesRegistroV}/>
        <div className="container cent py-5">
            <h1>REGISTRO DE VENTAS</h1>

            <form className="form-plant"  onSubmit = {(e)=>e.preventDefault()}> 
                <div className="dist2">
                    
                    <div className="mb-3">
                        <label for="idDescripcion" className="form-label">Nombre del producto:</label>
                        <input autocomplete="off" value = {formulario.producto} onChange = {e =>{upDateFormulario("producto",e.target.value)
                        busqueda(formulario.producto)
                        }
                    }  type="text" className="form-control" id="idDescripcion"/>
                        <div className ="blockList">
                            {   
                                
                                productos.map((p,e)=>{
                                    return <div onClick ={()=>{
                                        upDateFormulario("producto",p.nombre)
                                        upDateFormulario("idProducto",p._id)
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
                    <label for="idvalor" className="form-label">Valor de compra:</label>
                    <input value = {formulario.valor} onChange = {e =>upDateFormulario("valor",e.target.value)}  type="text" className="form-control" id="idvalor"/>
                </div>
                <div className="mb-3">
                    <label for="idEstado" className="form-label">Estado:</label>
                    <select defaultValue = {formulario.estados}  onChange = {e =>upDateFormulario("estados",e.target.value)}>
                        <option >Seleccionar</option>
                        <option value="1">En proceso</option>
                        <option value="2">Cancelada</option>
                        <option value="3">Entregada</option>
                    </select>
                </div>
                
            </form>
            
        <button type="button" className="btn btn-success" onClick ={()=> {setVentas({venta:formulario,user},(e)=> (e.msg)? alert(e.msg): window.location="/ventas?t="+user.token )}} >Agregar</button>
        </div>
    </div>    
    );
}

