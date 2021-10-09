import React,{useState,useEffect} from "react";
import Menu from './Menu';
import {signUp} from './requestAPI';
export default function Reg(props){
    const vBotones = [{nombre:"Home",ruta:"#"},{nombre:"Log in",ruta:"/login"},{nombre:"Sing up",ruta:"/singup"}]
   const [data, setData] = useState({name:"",email:""})
    console.log(props)
   function updateData(e,v){
       v=v.target.value
       data[e]=v
       setData({...data})
   }
   function go(){
       console.log(data)
    signUp(data,(e)=>{
        console.log(e)
    })
   }
    return(
        <div className="Padre">

        <Menu botones={vBotones}/>
        <div className="container d-flex  py-5 ">

            <input type="text" placeholder="nombre"  value={data.name} onChange={e=>updateData("name",e)}/>
            <input type="text" placeholder="correo"  value={data.email} onChange={e=>updateData("email",e)}/>
            <input type="submit"value="Continuar" onClick={go}/>
        </div>
    </div>        
    );
}
