import React from "react";
import Menu from './Menu';

function MainMv(props){
    const vBotones = [{nombre:"Home",ruta:"/admin"},{nombre:"Name",ruta:"#"},{nombre:"Log out",ruta:"/login"}]
    return(
        <div className="Padre">

        <Menu botones={vBotones}/>
        <div className="container cent py-5">
            <h1>VENTAS</h1>

            <div className="cent py-5">
                <div className="container-fluid">
                    <form className="d-flex">
                    <input className="form-control buscador me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <h3>Resultados</h3>

            <div className="cent my-4 curvo">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Valor de Compra</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>dd/mm/aaaa</td>
                            <td>20,000</td>
                            <td><button className="btn btn-success">Opciones</button></td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>dd/mm/aaaa</td>
                            <td>40,000</td>
                            <td><button className="btn btn-success">Opciones</button></td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>dd/mm/aaaa</td>
                            <td>55,000</td>
                            <td><button className="btn btn-success">Opciones</button></td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        </div>
    </div>
    );
}

export default MainMv;