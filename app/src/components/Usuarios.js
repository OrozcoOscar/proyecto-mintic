import React,{useState,useEffect} from "react";
import Menu from './Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import {getUsers,validToken,upDateStatus,searchUser} from './requestAPI';
import {BotonesUsers,SetQuery} from './BotonesMenu';
import fondo from './assest/fondoRojo.jpeg';

function Usuarios(props){

    const [user, setUser] = useState({name:"",rol:0});
    const [users,setUsers] = useState([]);
    const [consulta,setConsulta] = useState("");

    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            validToken({token},(e)=>{
                if(e.est!=200){
                     window.location="/"
                }else if(e.user.rol==2){
                    BotonesUsers[1].nombre=e.user.name
                    BotonesUsers.map(b=>SetQuery(b,"t",token))
                    setUser({...e.user})
                    
                    getUsers({token},(e)=>{
                        setUsers(e.users)
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

    const busqueda = (sh) =>{
        
        searchUser({search:sh,user} , (e)=>{
            setUsers([...e]);
        })
    }

    
    return(
        
        <div className = "Padre" style = {{backgroundImage:`url(${fondo})`,backgroundRepeat  : 'no-repeat',backgroundSize: 'cover'}}>
        <Menu botones={BotonesUsers} colores ={"white"}/>
        <div className="container cent py-5">
        <h1 style = {{color:"white"}}>Gestión de usuarios</h1>
        
        <div className="cent py-5">
            <div className="container-fluid">
                <form className="d-flex">
                <input  value = {consulta} onChange = {e =>{
                    setConsulta(e.target.value)
                    busqueda(e.target.value)
                    }}className="form-control buscador me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </div>
        <h3 style = {{color:"white"}}>Resultados</h3>

        <div className="cent my-4 curvo pColor letrasBlancas" >
            <table className="table table-striped letrasBlancas">
                <thead>
                    <tr>
                        <th scope="col">Usuario</th>
                        <th scope="col">Fecha de Registro</th>
                        <th scope="col">Rol</th>
                    </tr>
                </thead>
                <tbody letrasBlancas >
                {
                        users.map((u,i)=>{
                        return  (
                                
                                <tr key={i}>
                                <th className="letrasBlancas" scope="row">{u.name}</th>
                                <td className="letrasBlancas">{u.date}</td>
                                <td>
                                
                                <select defaultValue = {u.rol}  onChange = {e =>upDateStatus({user:{...u,rol:e.target.value},admin:user})}>
                                    <option >Seleccionar</option>
                                    <option value="0">Visitante</option>
                                    <option value="1">Usuario Natural</option>
                                    <option value="2">Admin</option>
                                </select>

                                </td>
                            </tr>
                        )})
                }
                </tbody>
            </table>
        </div>
    
    </div>
    </div>
        
    );
}

export default Usuarios;