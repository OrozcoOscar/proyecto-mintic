import React from "react";

function MainP(props){
    return(
        <div className="container cent py-5">
            <h1>PRODUCTOS</h1>

            <div className="row py-5">
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Producto</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="." className="btn btn-primary">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Producto</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="." className="btn btn-primary">Ver</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Nuevo producto</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="." className="btn btn-primary">Agregar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainP;