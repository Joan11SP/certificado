const express = require('express'),
    identidades = require('../models/model_identities'),
    router = express.Router();

router.post('/marcoIdentities',(req,res)=>{
    identidades.find({codigo:req.body.codigo},(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
})

module.exports=router;