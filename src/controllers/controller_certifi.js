const express = require('express'),
    certificado = require('../models/model_certifi'),
    carrera = require('../models/model_carrer')
router = express.Router();

router.post('/newCertifi', (req, res) => {
    var body = req.body;
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
}).post('/searchCertifi', (req, res) => {
    certificado.find({ codigo: req.body.codigo }, (err, rest) => {
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
        if (err) {
            res.status(404).json({error:"No existen tales datos"})
            throw err;
        }
    })
})

module.exports = router;