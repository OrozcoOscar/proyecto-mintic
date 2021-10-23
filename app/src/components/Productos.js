import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import {BotonesProductos,SetQuery} from './BotonesMenu';
import {validToken,getProductos,getVentas} from './requestAPI';


function Productos(props){
    const [user, setUser] = useState({name:"",rol:0})
    // const [productos,setProductos] = useState([]);
    const [ventas,setVentas] = useState([]);

    useEffect(() => {
        if(window.Get()){
            let token= window.Get().t
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==1){
                    BotonesProductos[1].nombre=e.user.name
                    BotonesProductos.map(b=>SetQuery(b,"t",token))
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
    return(
        <div className="Padre">
        <Menu botones={BotonesProductos}/>
        <div className="container cent py-5">
            <h1>Ventas</h1>

            <div className="container d-flex flex-row  cent">

            <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Venta</h5>
                            <p class="card-text">Agregar datos a la nueva venta</p>
                            <a href={"/registro-venta?t="+user.token} className="btn btn-primary btn-lg">Agregar Venta</a>
                        </div>
                    </div>
                </div>

            { 
                    ventas.map((p,i)=>(

                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">{p.nombre}</h5>
                                <p className="card-text">{p.valor}</p>
                                <p className="card-text">{p.cantidad}</p>
                                <a href="#" className="btn btn-primary btn-lg">Ver</a>
                            </div>
                        </div>
                    </div>
                    )
                ) 
            
            }  
            </div>
        </div>
    </div>
    );
}

export default Productos;