import React from "react";
export const HOST="http://192.168.0.14:3001"
const api={
    get:async (url,f=()=>{})=>{
        try {
            await fetch(HOST+url)
            .then((response) => response.json())
            .then((json) => {
               f(json)
            }) 
        } catch (error) {
            alert("Se perdio la conexion con el servidor");
        }

    },
    post:async (url,body,f=()=>{})=>{
        try {
            await fetch(HOST+url,{
                method:"post",
                body:JSON.stringify(body),
                headers:{'Content-Type': 'application/json'}
                })
            .then((response) => response.json())
            .then((json) => {
               f(json)
            }) 
        } catch (error) {
            alert("Se perdio la conexion con el servidor");
        }
       
    }
}

export function signIn(b,f){//inisia sesion
    api.post('/log/',b,f)
}
export async function getVentas(b,f){//obtiene las ventas
    api.post('/ventas',b,f)
}
export async function getProductos(b,f){//obtiene los productos
    api.post('/productos',b,f)
}
export async function setProductos(b,f){//obtiene los productos
    api.post('/setProductos',b,f)
}
export async function getUsers(b,f){//obtiene los usuarios
    api.post('/users',b,f)
}
export async function logOut(b,f){//salir
    api.post('/logout',b,f)
}
export async function validToken(b,f){//obtiene las ventas
    api.post('/validToken',b,f)
}
export async function upDateStatus(b,f){//cambiar rol
    api.post('/upDateStatus',b,f)
}
export async function upDateStatusProducto(b,f){//Poner ventas
    api.post('/upDateStatusProducto',b,f)
}
export async function upDateStatusVenta(b,f){//Poner ventas
    api.post('/upDateStatusVenta',b,f)
}
export async function searchProducto(b,f){//Busqueda
    api.post('/searchProducto',b,f)
}
export async function searchVenta(b,f){//Busqueda de venta
    api.post('/searchVenta',b,f)
}
export async function searchUser(b,f){//Busqueda de venta
    api.post('/searchUser',b,f)
}
export async function setVentas(b,f){//Poner ventas
    api.post('/setVentas',b,f)
}
