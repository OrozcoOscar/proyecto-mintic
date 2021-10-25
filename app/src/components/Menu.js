import React from "react";

function Menu({botones,user,colores}){
    console.log(colores)
    return(
        <nav className="navbar navbar-light px-5 py-3 navbar-fijo" style={{color:colores}}>
            
            <div className="container-fluid" >
                <h2>XWine</h2>
                <div>
                    {botones.map((b,i)=>{
                        if(user && b.user){
                            if(b.user==user.rol){
                                return (<a key={i} style={{color:"white"}} className="navbar-brand px-2" href={b.ruta}>{b.nombre}</a>)
                            }
                        }else{
                            return (<a key={i} style={{color:"white"}} className="navbar-brand px-2" href={b.ruta}>{b.nombre}</a>)
                        }
                    })}
                    
                </div>
            </div>
        </nav>
    );
}

export default Menu;