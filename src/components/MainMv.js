import React from "react";

function MainMv(props){
    return(
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
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><button className="btn btn-success">True</button></td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td><button className="btn btn-success">True</button></td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>Thornton</td>
                            <td><button className="btn btn-success">True</button></td>
                            <td><button className="btn btn-secondary">X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        </div>
    );
}

export default MainMv;