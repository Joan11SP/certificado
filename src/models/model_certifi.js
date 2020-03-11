const mongo = require('mongoose'),
    Schemas = mongo.Schema

var certSchema = new Schemas({
    codigo:{type:String,trim:true,unique:true},
    names:{type:String,trim:true},
    dni:{type:String,trim:true,unique:true},
    name_carrer:{type:String,trim:true},
    name_project:{type:String,trim:true},
    barrio:{type:String,trim:true},
    parroquia:{type:String,trim:true},
    canton:{type:String,trim:true},
    horas:{type:Number,trim:true}
})
var certificado = mongo.model('datos_certificado', certSchema);

module.exports = certificado;