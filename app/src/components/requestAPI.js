import React from "react";
export const HOST="http://192.168.1.75:3001"
const api={
    get:async (url,f=()=>{})=>{
        await fetch(HOST+url)
        .then((response) => response.json())
        .then((json) => {
           f(json)
        })
    },
    post:async (url,body,f=()=>{})=>{
        await fetch(HOST+url,{
            method:"post",
            body:JSON.stringify(body),
            headers:{'Content-Type': 'application/json'}
            })
        .then((response) => response.json())
        .then((json) => {
           f(json)
        })
    }
}

export function signIn(b,f){//inisia sesion
    api.post('/log/',b,f)
}
export function signUp(b,f){//se registra
    api.post('/reg/',b,f)
}
export async function getVentas(b,f){//obtiene las ventas
    api.post('/ventas',b,f)
}
export async function validToken(b,f){//obtiene las ventas
    api.post('/validToken',b,f)
}