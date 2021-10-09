import React,{useState,useEffect} from "react";
import Menu from './Menu';
import {validToken} from './requestAPI';
function MainAdmin(props){
    const vBotones = [{nombre:"Home",ruta:"#"},{nombre:"Name",ruta:"#"},{nombre:"Log out",ruta:"/login"}]
    const [user, setUser] = useState({name:""})
    useEffect(() => {
        let token=window.Get().t
        if(token){
            validToken({token},(e)=>{
                if(e.est!=200){
                    window.location="/login"
                }else{
                    user.name=e.user.name
                    setUser({...user})
                }
            })
        }else{
            window.location="/login"
        }
    }, [])
    

    return(
        <div className="Padre">

        <Menu botones={vBotones}/>
        
        <div className="container d-flex  cent py-5">
            
        <div><h1>ADMIN ({user.name})</h1></div>
        
            <div className="container d-flex flex-row  cent">
            <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Usuarios</h5>
                        <a href="/modificar-cliente" className="btn btn-primary btn-lg">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Ventas</h5>
                        <a href="/modificar-venta" className="btn btn-primary btn-lg">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card ">
                        <div className="card-body text-center">
                            <h5 className="card-title">Productos</h5>
                            <a href="/modificar-producto" className="btn btn-primary btn-lg">Ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MainAdmin;