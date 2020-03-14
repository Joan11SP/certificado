const express = require('express'),
    role = require('../models/model_role'),
    router = express.Router();

router.post('/newRole',(req,res)=>{
    role.insertMany({
        id:req.body.id,
        role:req.body.role
    },(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
}).post('/searchRole',(req,res)=>{
    role.find({},(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
})

module.exports=router;

