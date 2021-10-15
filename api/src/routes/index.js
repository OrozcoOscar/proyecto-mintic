const express = require('express');
const router = express.Router()


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
router.post('/log', async (req, res) => {//login
    const { user } = req.body;
    User.findOne({email:user.profileObj.email}, (err, u) => {
        if (err) {
            res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
        } else if (!u) {
            ///////////////////
            let userDB = new User();
            userDB.name = user.profileObj.name;
            userDB.email = user.profileObj.email;
            userDB.token= user.accessToken;
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
    User.findOne({token},{email:0}, (err, u) => {
                    if (err) {
                        res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
                    } else if (!u) {
                        res.json({ est: 404, msg: "No se encuentra ese usuario" });
                    }  else {
                        res.json({est: 200, user: u})
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
                        u.update({token:""}, () => {
                            res.json({ est: 200});
                        });
                        
                    }
                   
                })
})
router.post('/productos', async (req, res) => {
    res.json([
        {
            producto:"papa",
            precio:"2.000",
            cantidad:"20",
            estado:"vendido",
            estOpc:false
        },
        {
            producto:"papa",
            precio:"2.000",
            cantidad:"20",
            estado:"vendido",
            estOpc:false
        }, {
            producto:"papa",
            precio:"2.000",
            cantidad:"20",
            estado:"vendido",
            estOpc:false
        }, {
            producto:"papa",
            precio:"2.000",
            cantidad:"20",
            estado:"vendido",
            estOpc:false
        }, {
            producto:"papa",
            precio:"2.000",
            cantidad:"20",
            estado:"vendido",
            estOpc:false
        }])
})
router.post('/ventas', async (req, res) => {
    res.json([
        {
            producto:"papa",
            fecha:"dd/mm/aaaa",
            valor:"20.000",
            estado:"vendido",
            estOpc:false
        },
        {
            producto:"ñame",
            fecha:"dd/mm/aaaa",
            valor:"20.000",
            estado:"en espera",
            estOpc:false
        },
        {
            producto:"yuca",
            fecha:"dd/mm/aaaa",
            valor:"20.000",
            estado:"vendido",
            estOpc:false
        },{
            producto:"papa",
            fecha:"dd/mm/aaaa",
            valor:"20.000",
            estado:"vendido",
            estOpc:false
        },
        {
            producto:"ñame",
            fecha:"dd/mm/aaaa",
            valor:"20.000",
            estado:"en espera",
            estOpc:false
        },
        {
            producto:"yuca",
            fecha:"dd/mm/aaaa",
            valor:"20.000",
            estado:"vendido",
            estOpc:false
        }])
})

module.exports = router