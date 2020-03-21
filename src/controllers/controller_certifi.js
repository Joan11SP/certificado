const express = require('express'),
    certificado = require('../models/model_certifi'),
    carrera = require('../models/model_carrer'),
    validar = require('../Utilities/utilities'),
    moment = require('moment')
router = express.Router();

router.post('/newCertifi', (req, res) => {
    var body = req.body;
    if (validar(body.dni) === true) {
        certificado.find({ codigo: body.codigo }, (err, rest) => {
            if (rest.length !== 1) {
                certificado.insertMany({
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
                }, (err, rest1) => {
                    if (err) {
                        console.error(err)
                        throw err;
                    }
                    else {
                        res.status(200).json(rest1)
                    }
                })
            }
            else {
                res.json({ mensaje: "codigo_existe" })
            }
        })
    } else {
        res.json({ mensaje: "cedula_incorrecta" })
    }
}).get('/searchCertifi', (req, res) => {
    certificado.find({}, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        else {
            res.status(200).json(rest)
        }
    })
}).post('/updateCertifi', (req, res) => {
    var body = req.body
    if (validar(body.dni) === true) {
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
            if (docs.n === 0) {
                res.json({ mensaje: "codigo_noexiste" })
            }
            else {
                res.status(200).json(docs)
            }
        })
    }
    else {
        res.json({ mensaje: "cedula_incorrecta" })
    }
}).post('/deleteCertifi', (req, res) => {
    certificado.remove({ codigo: req.body.codigo }, (err, rest) => {
        if (err) {
            throw err;
        }
        else {
            res.status(200).json(rest)
        }
    })
})

module.exports = router;