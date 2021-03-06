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
        else{
            res.status(200).json(rest)
        }
    })
}).get('/searchRole',(req,res)=>{
    role.find({},(err,rest)=>{
        if (err) {
            console.error(err)
            throw err;
        }
        else{
            res.status(200).json(rest)
        }
    })
})

module.exports=router;

