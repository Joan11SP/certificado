const express = require('express'),
      router = express.Router(),
      identidades = require('../controllers/controller_identities');

router.use('/datos_identidades',identidades)

module.exports=router;