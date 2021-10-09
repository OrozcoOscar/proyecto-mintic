import React from "react";
import Menu from './Menu';

function Singup(props){
    const vBotones = [{nombre:"Home",ruta:"#"},{nombre:"Log in",ruta:"/login"},{nombre:"Sing up",ruta:"/singup"}]
    return(
        <div className="Padre">

        <Menu botones={vBotones}/>
        <div className="container d-flex py-5 ">

            <div className="contenedor2 d-flex justify-content-center"><p>SINGUP</p></div>
            <div className="line d-flex "></div>
            <div className="siderbar d-flex justify-content-center align-items-center"><a href="/productos"><button type="button" class="btn btn-primary"><i className="fa fa-google"></i> Continue with Google</button></a></div>

        </div>
    </div>   
    );
}

export default Singup;