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
    const { email } = req.body;
    User.findOne({ email}, (err, u) => {
        if (err) {
            res.json({ est: err.code, msg: "Algo salio mal,intentalo de nuevo mas tarde" });
        } else if (!u) {
            res.json({ est: 404, msg: "No se encuentra ese usuario" });
        } else {
            let token=Token(10)
            u.update({token}, () => {
                u.token=token
                res.json({ est: 200,user:u});
            });      
        }
        

    })
})
router.post('/reg',(req, res) => {//signUp
    const { name, email } = req.body;
    console.log(name,email)
    ///////////////////
    let userDB = new User();
    userDB.name = name;
    userDB.email = email;
    ///////////////////////////
    userDB.save(err => {
        if (err){
            if(err.code==11000){
                res.json({ est: err.code,msg:"Ya hay una cuenta con ese correo"});
            }
        }
        else res.json({ est: 200 });
    });
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