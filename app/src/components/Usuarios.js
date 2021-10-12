import React,{useState,useEffect} from "react";
import Menu from './Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import {getUsers,validToken} from './requestAPI';
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
    function updateEst(i){
        if(users[i].estOpc){
            users[i].estOpc=false
        }else{
            for (let e = 0; e < users.length; e++) {
                users[e].estOpc=false
            }
            users[i].estOpc=true
        }
        setUsers([...users])
    }
    
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
                        <th scope="col">Documento</th>
                        <th scope="col">Fecha de Registro</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                {
                        users.map((v,i)=>{
                        return  ( <tr key={i}>
                                <th scope="row">{v.name}</th>
                                <td>xxxxxxxxx</td>
                                <td>xx/xx/xx</td>
                                <td>{
                                    (()=>{
                                        if(v.rol==0)return "Visitante"
                                        else if(v.rol==1)return "Usuario Natural"
                                        else if(v.rol==2)return "Admin"
                                    })()
                                    }</td>
                                <td>
                                
                                <Dropdown isOpen={v.estOpc} toggle={()=>{}} onClick={()=>updateEst(i)}>
                                        <DropdownToggle>
                                            Opciones
                                        </DropdownToggle>

                                        <DropdownMenu>
                                            <DropdownItem>Accion1</DropdownItem>
                                            <DropdownItem>Accion1</DropdownItem>
                                            <DropdownItem>Accion1</DropdownItem>
                                        </DropdownMenu>
                                        
                                    </Dropdown>
                                </td>
                                <td><button className="btn btn-secondary">X</button></td>
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