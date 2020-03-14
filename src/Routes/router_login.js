const express = require('express'),
      router = express.Router(),
      login = require('../controllers/controller_login');

router.use('/datos_usuario',login)

module.exports=router;