const mongo = require('mongoose'),
    Schemas = mongo.Schema

var idenSchema = new Schemas({
    codigo:{type:Number,trim:true},
    imageISTL:{data: Buffer, contentType: String},
    imageSenecyt:{data: Buffer, contentType: String},
    imageGob:{data: Buffer, contentType: String},
    imageISTL:{data: Buffer, contentType: String},
    rector:{type:String,trim:true},
    presGob:{type:String,trim:true}
})
var identidades = mongo.model('identidades', idenSchema);

module.exports = identidades;