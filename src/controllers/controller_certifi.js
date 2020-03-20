const express = require('express'),
    certificado = require('../models/model_certifi'),
    carrera = require('../models/model_carrer'),
    validar = require('../Utilities/utilities'),
    router = express.Router();

router.post('/newCertifi', (req, res) => {
    var body = req.body;
    if (validar(body.dni) === true) {
        certificado.find({ dni: body.dni }, (err, rest1) => {
            if (rest1.length !== 1) {
                certificado.insertMany({
                    codigo: body.codigo,
                    names: body.names,
                    dni: body.dni,
                    name_carrer: body.id,
                    name_project: body.name_project,
                    barrio: body.barrio,
                    parroquia: body.parroquia,
                    canton: body.canton,
                    horas: body.horas,
                    date_inicio: body.date_inicio,
                    date_fin: body.date_fin
                }, (err, rest) => {
                    if (err) {
                        console.error(err)
                        throw err;
                    }
                    res.status(200).json(rest)
                })
            }
            else {
                res.json({ mensaje: "cedula_existe" })
            }
        })
    } else {
        res.json({ mensaje: "cedula_incorrecta" })
    }
}).post('/searchCertifi', (req, res) => {
    certificado.find({ codigo: req.body.codigo }, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        res.status(200).json(rest)

        if (err) {
            res.json(rest);
            throw err;
        }
    })
})/*.post('/updateCertifi', (req, res) => {
    var body = req.body
    if (validar(body.dni) === true) {
        certificado.find({ codigo: body.codigo }, (err, rest) => {
            if (rest !== 1) {
                console.log(rest)
                certificado.updateMany({ codigo: body.codigo }, {
                    $set: {
                        codigo: body.codigo,
                        names: body.names,
                        dni: body.dni,
                        name_carrer: body.name_carrer,
                        name_project: body.name_project,
                        barrio: body.barrio,
                        parroquia: body.parroquia,
                        canton: body.canton,
                        horas: body.horas,
                        date_inicio: body.date_inicio,
                        date_fin: body.date_fin
                    }
                }, (err, docs) => {
                    if (err) {
                        console.error(err);
                        throw err;
                    }
                    res.status(200).json(docs)
                })
            }
            else {
                res.json({ mensaje: "cedula_existe" })
            }
        })
    }
    else {
        res.json({ mensaje: "cedula_incorrecta" })
    }

})
*/
module.exports = router;