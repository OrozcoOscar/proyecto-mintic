import React from "react";

function Menu({botones}){
    return(
        <nav className="navbar navbar-light px-5 py-3">
            <div className="container-fluid">
                <h2>APP-NAME</h2>
                <div>
                    {botones.map(b=>(<a class="navbar-brand px-2" href={b.ruta}>{b.nombre}</a>))}
                    
                </div>
            </div>
        </nav>
    );
}

export default Menu;