import React,{useState,useEffect} from "react";
import {signIn,validToken} from './requestAPI'
import GoogleLogin from 'react-google-login';
import fondo from './assest/fondoP.jpeg'; // with import

export default function Login(props){
    const [user, setUser] = useState({})
    const [checked, setChecked] = useState(true)
    useEffect(() => {
        if(user.profileObj)
          go() 
      },
       [user])


    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            validToken({token},(e)=>{
                if(e.est==200){
                    if( e.user.rol==1){
                        window.location = '/ventas?t='+token;
                    }else if(e.user.rol==2){
                        window.location = '/admin?t='+token;
                    }
                }
            })
        }
    }, [])

    function go(){
     signIn({user},(e)=>{
         if(e.est==200){
            if(e.user.rol==0){
                alert("Tu cuenta no ha sido activada,comunicate con el administrador")
            }else if(e.user.rol==1){
                window.location = '/ventas?t='+e.user.token;
            }else if(e.user.rol==2){
                window.location = '/admin?t='+e.user.token;
            }
         }else{
            alert(e.msg)
         }
     })
    }
    return(
        <div className="PadreLogin"   style = {{backgroundImage:`url(${fondo})`,backgroundRepeat  : 'no-repeat',backgroundSize: 'cover'}}>
        
        <div className="container d-flex  py-5 ">
            {/* Contenedor 1  */}
            <div className="contenedor d-flex justify-content-center">
                <h1>XWine</h1>
                <p>El mejor gestor de ventas para administrar tus mejores vinos, obtener una mejor organización y una mejor forma de ver tu negocio.</p>
                <p>No lo pienses mas y registrate es totalmente GRATIS </p>
            </div>
            {/* Contenedor 2  */}
            <div className="siderbar">
                <div className ="card pColor" style={{  height: 250,width: 250 }}>
                    <div className="card-body d-flex flex-column  justify-content-end aling-items-center ">
                        <div style = {{textAlign:"center",fontSize : 25}}>
                            <p>Gestiona de manera facil tus productos</p>
                        </div>
                        <GoogleLogin
                        clientId="245959408070-6jrr6enfgi88v8sur7fkuepp08ur0u62.apps.googleusercontent.com"
                        onSuccess={setUser}
                        isSignedIn={checked}
                        />
                        <br />
                        <div className=" d-flex justify-content-center ">
                        <input type="checkbox" checked={checked} onClick={(e)=>setChecked(e.target.checked)}/>
                        <span>Mantener sesion Activa</span>
                        </div>
                        <div>
                        </div>
                    </div>
                    
                </div>
                
            </div>

        </div>
    </div>        
    );
}