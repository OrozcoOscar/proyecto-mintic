import React,{useState,useEffect} from "react";
import Menu from './Menu';
import {signIn,validToken} from './requestAPI';
import {BotonesLogin} from './BotonesMenu';
export default function Login(props){
    const [email, setEmail] = useState("")
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
    console.log(email)
     signIn({email},(e)=>{
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
                <a href="/productos">
                    <button type="button" class="btn btn-primary">
                         <i className="fa fa-google"></i> Continue with Google
                    </button>
                </a>

                <input type="text" placeholder="email" 
                value={email} 
                onChange={e=>setEmail(e.target.value)}/>
                <input type="submit"value="Continuar" onClick={go} />
            </div>

        </div>
    </div>        
    );
}