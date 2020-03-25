const express = require('express'),
    certificado = require('../models/model_certifi'),
    carrera = require('../models/model_carrer'),
    validar = require('../Utilities/utilities'),
    moment = require('moment')
router = express.Router();

router.post('/newCertifi', (req, res) => {
    var body = req.body;
    if (validar(body.dni) === true) {
        certificado.find({ codigo: body.codigo}, (err, rest) => {
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
    certificado.find({status: { $in: [1] } }, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        else {
            res.status(200).json(rest)
        }
    })
}).post('/searchOneCertifi', (req, res) => {
    certificado.find({codigo:req.body.codigo,status: { $in: [1] } }, (err, rest) => {
        if (rest.length === 0) {
            res.json(rest);
        }
        else {
            rest.forEach(data => {
                carrera.find({ id: data.name_carrer }, (err, rest1) => {
                    rest1.forEach(data2 => {
                        if (data.name_carrer == data2.id) {
                            data.name_carrer = data2.nameCarrer;
                            res.status(200).json(rest)
                        }
                    })
                })
            })
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
    certificado.update({ codigo: req.body.codigo},{
        $set: { status: 0 } }, (err, docs) => {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).json(docs)
        })
})

module.exports = router;