import React from "react";
import Menu from './Menu';

function MainRv(props){
    const vBotones = [{nombre:"Home",ruta:"#"},{nombre:"Name",ruta:"#"},{nombre:"Log out",ruta:"/login"}]
    return(
        <div className="Padre">
        <Menu botones={vBotones}/>
        <div className="container cent py-5">
            <h1>REGISTRO DE VENTAS</h1>

            <form className="form-plant">
                <div className="dist2">
                    <div className="mb-3">
                        <label for="idProducto" className="form-label">Identificador de producto:</label>
                        <input type="text" className="form-control" id="idProducto" aria-describedby="productoHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="idDescripcion" className="form-label">Descripcion:</label>
                        <input type="text" className="form-control" id="idDescripcion"/>
                    </div>
                </div>
                <div className="dist2">
                    <div className="mb-3">
                        <label for="idvalor" className="form-label">Valor Unitario:</label>
                        <input type="text" className="form-control" id="idvalor"/>
                    </div>
                    <div className="mb-3">
                        <label for="idEstado" className="form-label">Estado:</label>
                        <input type="text" className="form-control" id="idEstado"/>
                    </div>
                </div>
                
                <div className="mb-3">
                    <label for="idvalor" className="form-label">Valor Unitario:</label>
                    <input type="text" className="form-control" id="idvalor"/>
                </div>
                <div className="mb-3">
                    <label for="idEstado" className="form-label">Estado:</label>
                    <input type="text" className="form-control" id="idEstado"/>
                </div>
                
            </form>
        </div>
    </div>    
    );
}

export default MainRv;