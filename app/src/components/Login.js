import React,{useState,useEffect} from "react";
import Menu from './Menu';
import {signIn,validToken} from './requestAPI'
import {BotonesLogin} from './BotonesMenu';
import GoogleLogin from 'react-google-login';
export default function Login(props){
    const [user, setUser] = useState({})

    useEffect(() => {
        if(user.profileObj)
          go() 
      }, [user])


    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            validToken({token},(e)=>{
                if(e.est==200){
                    if( e.user.rol==1){
                        window.location = '/productos?t='+token;
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
                window.location = '/productos?t='+e.user.token;
            }else{
                window.location = '/admin?t='+e.user.token;
            }
         }else{
            alert(e.msg)
         }
     })
    }
    return(
        <div className="Padre">

        <Menu botones={BotonesLogin} />
        <div className="container d-flex  py-5 ">

            <div className="contenedor d-flex justify-content-center"><p>LOGIN</p></div>
            <div className="line d-flex "></div>
            <div className="siderbar d-flex justify-content-center align-items-center">
                <GoogleLogin
                clientId="245959408070-6jrr6enfgi88v8sur7fkuepp08ur0u62.apps.googleusercontent.com"
                onSuccess={setUser}
                isSignedIn={true}
                />
            </div>

        </div>
    </div>        
    );
}