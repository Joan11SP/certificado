const express = require('express'),
    certificado = require('../models/model_certifi'),
    router = express.Router();

router.post('/newCertifi', (req, res) => {
    var body = req.body;
    certificado.insertMany({
        codigo: body.codigo,
        names: body.names,
        dni: body.dni,
        name_carrer: body.name_carrer,
        name_project: body.name_project,
        barrio: body.barrio,
        parroquia: body.parroquia,
        canton: body.canton,
        horas: body.horas
    }, (err,rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
}).post('/searchCertifi',(req,res)=>{
    certificado.find({codigo:req.body.codigo},(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
})

module.exports = router;