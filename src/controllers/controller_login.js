const express = require('express'),
    login = require('../models/model_login'),
    validar = require('../Utilities/utilities'),
    role = require('../models/model_role'),
    router = express.Router();

router.post('/newPerson', (req, res) => {
    var body = req.body
    login.find({ dni: body.dni }, (err, rest1) => {
        if (validar(body.dni) === true) {
            rest1.forEach(data => {
                if (data.dni !== body.dni) {
                    login.insertMany({
                        names: body.names,
                        dni: body.dni,
                        genero: body.genero,
                        telefono: body.telefono,
                        role: body.role,
                        password: body.password
                    }, (err, rest) => {
                        if (err) {
                            console.log(err)
                            throw err;
                        }
                        res.status(200).json(rest)
                    })
                } else {
                    res.json({ mensaje: "cedula_existe" })
                }
            })
        } else {
            res.json({ mensaje: "cedula_incorrecta" })
        }
    })
}).post('/searchPerson', (req, res) => {
    login.find({ dni: req.body.dni }, (err, rest) => {
        if (rest.length === 0) {
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
        if (err) {
            console.log(err)
            throw err;
        }
    })
}).post('/getLogin', (req, res) => {
    login.find({ dni: req.body.dni, password: req.body.password }, { dni: 1, role: 1 }, (err, rest) => {
        if (rest.length === 1) {
            res.status(200).json(rest)
        } else {
            res.json(rest);
        }
        if (err) {
            console.log(err)
            throw err;
        }
    })
}).post('/updatePerson', (req, res) => {
    var body = req.body
    login.find({ dni: body.dni }, (err, rest1) => {
        if (validar(body.dni) === true) {
            rest1.forEach(data => {
                if (data.dni !== body.dni) {
                    login.updateMany({ dni: body.dni }, {
                        $set: {
                            names: body.names,
                            genero: body.genero,
                            telefono: body.telefono,
                            role: body.role,
                            password: body.password
                        }
                    }, (err, docs) => {
                        if (err) {
                            console.error(err);
                            throw err;
                        }
                        res.status(200).json(docs)
                    })
                }
                else{
                    res.json({ mensaje: "cedula_existe" })
                }
            })
        }
        else{
            res.json({ mensaje: "cedula_incorrecta" })
        }
    })

})

module.exports = router;