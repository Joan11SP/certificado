const mongo = require('mongoose'),
    Schemas = mongo.Schema

var carrerSchema = new Schemas({
    id:{type:String,trim:true,unique:true,auto:true},
    nameCarrer:{type:String,trim:true}
})
var carrera = mongo.model('carrera', carrerSchema);

module.exports = carrera;