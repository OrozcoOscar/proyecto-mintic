import React,{useState,useEffect} from "react";
import Menu from './Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import {getUsers,validToken,upDateStatus} from './requestAPI';
import {BotonesUsers,SetQuery} from './BotonesMenu';

function Usuarios(props){

    const [user, setUser] = useState({name:"",rol:0})
    const [users,setUsers] = useState([]);

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

    // function updateEst(i){
    //     if(users[i].estOpc){
    //         users[i].estOpc=false
    //     }else{
    //         for (let e = 0; e < users.length; e++) {
    //             users[e].estOpc=false
    //         }
    //         users[i].estOpc=true
    //     }
    //     setUsers([...users])
    // }
    
    return(
        
        <div>
        <Menu botones={BotonesUsers}/>
        <div className="container cent py-5">
        <h1>USUARIOS</h1>
        
        <div className="cent py-5">
            <div className="container-fluid">
                <form className="d-flex">
                <input className="form-control buscador me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary btn-busc" type="submit">Search</button>
                </form>
            </div>
        </div>
        <h3>Resultados</h3>

        <div className="cent my-4 curvo">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Usuario</th>
                        <th scope="col">Fecha de Registro</th>
                        <th scope="col">Rol</th>
                    </tr>
                </thead>
                <tbody>
                {
                        users.map((u,i)=>{
                        return  ( <tr key={i}>
                                <th scope="row">{u.name}</th>
                                <td>{u.date}</td>
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