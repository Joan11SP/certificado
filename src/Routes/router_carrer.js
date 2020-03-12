const express = require('express'),
      router = express.Router(),
      carrera = require('../controllers/controller_carrer');

router.use('/datos_certificado',carrera)

module.exports=router;