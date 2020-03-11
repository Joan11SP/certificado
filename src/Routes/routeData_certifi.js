const express = require('express'),
      router = express.Router(),
      certificado = require('../controllers/controller_certifi');

router.use('/datos_certificado',certificado)

module.exports=router;