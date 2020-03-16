const express = require('express'),
    login = require('../models/model_login'),
    validar = require('../Utilities/utilities'),
    role = require('../models/model_role'),
    router = express.Router();

router.post('/newPerson', (req, res) => {
    var body = req.body
    if(validar(body.dni)===true){
        login.insertMany({
            names: body.names,
            dni: body.dni,
            genero:body.genero,
            telefono:body.telefono,
            role:body.role,
            password: body.password
        },(err,rest)=>{
            if(err){
                console.log(err)
                throw err;
            }
            res.status(200).json(rest)
        })
    }

}).post('/searchPerson',(req,res)=>{
    login.find({dni:req.body.dni,password:req.body.password,role: { $in: ["1"] } }, (err, rest) => {
        if(rest.length===0){
            res.json(rest);
        }
        rest.forEach(data => {
            role.find({ id: data.role }, (err, rest1) => {
                rest1.forEach(data2 => {
                    if (data.role == data2.id) {
                        data.role = data2.role;
                        res.status(200).json(rest)
                    }
                })
            })
        })
        if(err){
            console.log(err)
            throw err;
        }
    })
}).post('/getLogin',(req,res)=>{
    login.find({dni:req.body.dni,password:req.body.password,role: { $in: ["1"] } }, (err, rest) => {
        if(rest.length===1){
            rest.forEach(data=>{
                res.status(200).json([data.names,data.role])
            })
        }else{
            res.json(rest);
        }
        if(err){
            console.log(err)
            throw err;
        }
    })
})

module.exports = router;