import React,{useState,useEffect} from "react";
import {logOut,validToken} from './requestAPI';
export default function LogOut(props){
    useEffect(() => {
        if(window.Get()){
            let token=window.Get().t
            validToken({token},(e)=>{
                if(e.est==200){
                    logOut({token},()=>{
                        window.location = '/'
                    })
                    
                }
            })
        }else{
            window.location = '/'
        }
    }, [])
    return(<div className="Padre"></div>);
}