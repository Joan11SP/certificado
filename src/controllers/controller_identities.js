const express = require('express'),
    identidades = require('../models/model_identities'),    
    router = express.Router();

router.post('/marcoIdentities',async (req, res) => {
    const image=new identidades();
    image.imageISTL = req.body.imageISTL;
    image.name = req.body.name
    console.log(image)
    await image.save();
})

module.exports = router;