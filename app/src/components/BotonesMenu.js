
//------Botones generales---------------
export const BotonesLogin = [{nombre:"Home",ruta:"/"},{nombre:"Log in",ruta:"/login"},{nombre:"Sing up",ruta:"/singup"}]
export const BotonesSignUp = [{nombre:"Home",ruta:"/"},{nombre:"Log in",ruta:"/login"},{nombre:"Sing up",ruta:"/singup"}]
    
//-------Botones Admin/comun------------------
export const BotonesProductos = [
    {nombre:"Home",ruta:"/productos",user:1},
    {nombre:"Name",ruta:"#"},
    {nombre:"Log out",ruta:"/logout"}
]
export const BotonesAdmin = [
    {nombre:"Home",ruta:"/admin",user:2},
    {nombre:"Name",ruta:"#"},
    {nombre:"Log out",ruta:"/logout"}
]
export const BotonesModificarP = [
    {nombre:"Home",ruta:"/admin",user:2},
    {nombre:"Home",ruta:"/productos",user:1},
    {nombre:"Name",ruta:"#"},
    {nombre:"Log out",ruta:"/logout"}
]
export const BotonesRegistroP = [
    {nombre:"Home",ruta:"/productos",user:1},
    {nombre:"Name",ruta:"#"},
    {nombre:"Log out",ruta:"/logout"}
]
export const BotonesRegistroV = [
    {nombre:"Home",ruta:"/admin",user:2},
    {nombre:"Name",ruta:"#"},
    {nombre:"Log out",ruta:"/logout"}
]
export const BotonesVentas = [
    {nombre:"Home",ruta:"/admin",user:2},
    {nombre:"Name",ruta:"#"},
    {nombre:"Log out",ruta:"/logout"}
]
export const BotonesUsers = [
    {nombre:"Home",ruta:"/admin",user:2},
    {nombre:"Name",ruta:"#"},
    {nombre:"Log out",ruta:"/logout"}
]
    
   

export function SetQuery(boton,key,value){
    if(boton.ruta.indexOf("?")>-1){
        boton.ruta+="&"+key+"="+value
    }else{
        boton.ruta+="?"+key+"="+value
    }
}