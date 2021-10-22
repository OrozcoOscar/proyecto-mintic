const express = require('express');
const router = express.Router()
const axios = require('axios');

/**
 * MODELOS
 */
 const User = require('../models/user')
 const Venta = require('../models/venta')
 const Producto = require('../models/producto')
///////////////////////////
console.clear()
function Token(size) {
    let t=""
    for (let i = 0; i < size; i++) {
        t+=Math.random().toString(36).substr(2)
    }
    return t
};
router.post('/log', (req, res) => {//login
    const { user } = req.body;
    User.findOne({email:user.profileObj.email},async  (err, u) => {
        if (err) {
            res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
        } else if (!u) {
            let nCollections=await User.find({}).count();
            ///////////////////
            let userDB = new User();
            userDB.name = user.profileObj.name;
            userDB.email = user.profileObj.email;
            userDB.token= user.accessToken;
            userDB.date = (new Date()).toLocaleDateString();
            if(nCollections==0)userDB.rol=2
            ///////////////////////////
            userDB.save((err,u2) => {
                if (err){
                    if(err.code==11000){
                        res.json({ est: err.code,msg:"Ya hay una cuenta con ese correo"});
                    }
                }
                else res.json({ est: 200,user:u2});
            });
        } else {
            u.update({token:user.accessToken}, () => {
                u.token=user.accessToken
                res.json({ est: 200,user:u});
            });      
        }
        

    })
})
router.post('/validToken',(req, res) => {//validar sesion
    const { token } = req.body;
    User.findOne({token}, async (err, u) => {
                    if (err) {
                        res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
                    } else if (!u) {
                        res.json({ est: 404, msg: "No se encuentra ese usuario" });
                    }  else {

                        if(!token){
                            res.json({ est: 404, msg: "No se encuentra ese usuario" });
                        }

                        let json=await axios.get("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="+token)
                        
                        if(json && json.data.email==u.email){
                            res.json({est: 200, user: u})
                        }else{
                            res.json({ est: 404, msg: "No se encuentra ese usuario" });
                        } 
                    }
                   
                })
})
router.post('/users', async (req, res) =>{
    const { token } = req.body;
    User.findOne({token}, async (err, u) => {
                    if (err) {
                        res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
                    } else if (!u) {
                        res.json({ est: 404, msg: "No se encuentra ese usuario" });
                    }  else {
                       if(u.rol==2){
                            let users =await User.find({email:{ $ne:u.email}},{email:0,token:0})
                            users=users.map(u=>{return {...u._doc,estOpc:false}})
                            res.json({est: 200, users})
                       }else{
                            res.json({est: 403 , msg: "403 Forbidden(No tienes los permisos suficientes)" })
                       }
                        
                    }
                   
                })
})
router.post('/logout', async (req, res) =>{
    const { token } = req.body;
    User.findOne({token}, async (err, u) => {
                    if (err) {
                        res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
                    } else if (!u) {
                        res.json({ est: 404, msg: "No se encuentra ese usuario" });
                    }  else {
                        axios.get("https://accounts.google.com/o/oauth2/revoke?token="+token);
                        u.update({token:""}, () => {
                            res.json({ est: 200});
                        });
                        
                    }
                   
                })
})

router.post('/upDateStatus' , async (req,res) =>{
    const {user,admin} = req.body;

    if(admin.rol === 2){
        User.findOne({_id:user["_id"]},async (err,u) =>{
            if (err) {
                res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
            } else if (!u) {
                res.json({ est: 404, msg: "No se encuentra ese usuario" });
            }  else {
                u.updateOne({rol:user.rol}, () => {
                    res.json({ est: 200});
                });    
            }
           
        })
    }else{
        res.json({est: 403 , msg: "403 Forbidden(No tienes los permisos suficientes)" })
    }
    
});
router.post('/upDateStatusProducto' , async (req,res) =>{
    const {user,admin} = req.body;
    if(admin.rol === 2){
        Producto.findOne({_id:user["_id"]},async (err,u) =>{
            console.log(u)
            if (err) {
                res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
            } else if (!u) {
                res.json({ est: 404, msg: "No se encuentra ese usuario" });
            }  else {
                u.updateOne({estados:user.estados}, () => {
                    res.json({ est: 200});
                });    
            }
           
        })
    }else{
        res.json({est: 403 , msg: "403 Forbidden(No tienes los permisos suficientes)" })
    }
    
});
router.post('/upDateStatusVenta' , async (req,res) =>{
    const {user,admin} = req.body;
    if(admin.rol === 2){
        Producto.findOne({_id:user["_id"]},async (err,u) =>{
            console.log(u)
            if (err) {
                res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
            } else if (!u) {
                res.json({ est: 404, msg: "No se encuentra ese usuario" });
            }  else {
                u.updateOne({estados:user.estados}, () => {
                    res.json({ est: 200});
                });    
            }
           
        })
    }else{
        res.json({est: 403 , msg: "403 Forbidden(No tienes los permisos suficientes)" })
    }
    
});
router.post('/searchProducto' , async (req,res) =>{
    const {user,search} = req.body;
    if(user.rol === 2){
        Producto.find({nombre:(new RegExp(search,"ig"))},async (err,p) =>{
            res.json(p);   
        })
    }else{
        res.json({ est: 404, msg: "No se encuentra ese usuario" });
    }
});



router.post('/productos', async (req, res) => {
    
    const {_id,rol} = req.body;

    if(rol === 2){
        const productos = await Producto.find({});
        res.json(productos);
    }else if(rol === 1){
        const productos = await Producto.find({userID:_id});
        res.json(productos);
    }else{
        res.json([]);
    }
})
router.post('/setProductos', async (req, res) => {

    const {userID,nombre,precio,cantidad,estados} = req.body;
    let productoDB = new Producto();
    productoDB.userID = userID;
    productoDB.nombre = nombre;
    productoDB.precio = precio;
    productoDB.cantidad = cantidad;
    productoDB.estados = estados;

    productoDB.save((err,p) => {
        if (err){
            if(err.code==11000){
                res.json({ est: err.code,msg:"Ya hay un producto con ese token"});
            }else{
                res.json({ est: 400 ,msg:"COMPLETAR LOS CAMPOS"});
            }
        }
        else res.json({ est: 200,producto:p});
    });
})

router.post('/ventas', async (req, res) => {

    const {_id,rol} = req.body;

    if(rol === 2){ 
        Venta.find({}).populate("productoID").exec(function (err, v) {
            if (err) return handleError(err);
            res.json(v);
        })
        
    }
    else{
        res.json([]);
    }
})

router.post('/setVentas', async (req, res) => {

    const {venta,user} = req.body;
    if(user.rol === 2){

        let ventaDB = new Venta();
        ventaDB.productoID = venta.idProducto;
        ventaDB.fecha = venta.fecha;
        ventaDB.valor = venta.valor;
        ventaDB.cantidad = venta.cantidad;
        ventaDB.estados = venta.estados;
        ventaDB.adminID = user._id;
    ventaDB.save((err,v) => {
        
        if (err){
            if(err.code==11000){
                res.json({ est: err.code,msg:"Ya hay una venta con ese token"});
            }else{
                res.json({ est: 400 ,msg:"COMPLETAR LOS CAMPOS"});
            }
        }
        else res.json({ est: 200});
    });

    }else{
        res.json({est: 403 , msg: "403 Forbidden(No tienes los permisos suficientes)" })   
    }

})

module.exports = router