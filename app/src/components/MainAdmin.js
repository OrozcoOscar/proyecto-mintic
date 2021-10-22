import React,{useState,useEffect} from "react";
import Menu from './Menu';
import {validToken} from './requestAPI';
import {BotonesAdmin,SetQuery} from './BotonesMenu';


function MainAdmin(props){
     const [user, setUser] = useState({name:"",rol:0})
     let token=""
    useEffect(() => {
        if(window.Get()){
            token=window.Get().t
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==2){
                    BotonesAdmin[1].nombre=e.user.name
                    BotonesAdmin.map(b=>SetQuery(b,"t",token))
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

        <Menu botones={BotonesAdmin} user={user}/>
        
        <div className="container d-flex  cent py-5">
            
        <div><h1>ADMIN</h1></div>
        
            <div className="container d-flex flex-row  cent">
            <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Usuarios</h5>
                        <a href={"/usuarios/?t="+user.token} className="btn btn-primary btn-lg">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Ventas</h5>
                        <a href={"/ventas/?t="+user.token} className="btn btn-primary btn-lg">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card ">
                        <div className="card-body text-center">
                            <h5 className="card-title">Productos</h5>
                            <a href={"/modificar-productos/?t="+user.token} className="btn btn-primary btn-lg">Ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MainAdmin;