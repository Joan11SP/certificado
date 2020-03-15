const mongo = require('mongoose'),
    Schemas = mongo.Schema

var loginSchema = new Schemas({
    names:{type:String,trim:true},
    dni:{type:String,trim:true,unique:true},
    genero:{type:String,trim:true},
    telefono:{type:String,trim:true},
    role:{type:String,trim:true},
    password:{type:String,trim:true}
})
var login = mongo.model('personas', loginSchema);

module.exports = login;