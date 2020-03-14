const mongo = require('mongoose'),
    Schemas = mongo.Schema

var roleSchema = new Schemas({
    id:{type:String,trim:true,unique:true,auto:true},
    role:{type:String,trim:true}
})
var role = mongo.model('roles', roleSchema);

module.exports = role;