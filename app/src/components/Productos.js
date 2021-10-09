import React from "react";
import Menu from './Menu';

function MainP(props){
    const vBotones = [{nombre:"Home",ruta:"#"},{nombre:"Name",ruta:"#"},{nombre:"Log out",ruta:"/login"}]
    return(
        <div className="Padre">

        <Menu botones={vBotones}/>
        <div className="container cent py-5">
            <h1>PRODUCTOS</h1>

            <div className="container d-flex flex-row  cent">
            <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Producto</h5>
                        <p class="card-text">Precio del producto</p>
                        <a href="#" className="btn btn-primary btn-lg">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Producto</h5>
                        <p class="card-text">Precio del producto</p>
                        <a href="#" className="btn btn-primary btn-lg">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Producto</h5>
                            <p class="card-text">Agregar datos al nuevo producto</p>
                            <a href="/registro-producto" className="btn btn-primary btn-lg">Agregar producto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MainP;