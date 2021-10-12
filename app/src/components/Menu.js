import React from "react";

function Menu({botones,user}){
    return(
        <nav className="navbar navbar-light px-5 py-3">
            <div className="container-fluid">
                <h2>APP-NAME</h2>
                <div>
                    {botones.map((b,i)=>{
                        if(user && b.user){
                            if(b.user==user.rol){
                                return (<a key={i} className="navbar-brand px-2" href={b.ruta}>{b.nombre}</a>)
                            }
                        }else{
                            return (<a key={i} className="navbar-brand px-2" href={b.ruta}>{b.nombre}</a>)
                        }
                    })}
                    
                </div>
            </div>
        </nav>
    );
}

export default Menu;