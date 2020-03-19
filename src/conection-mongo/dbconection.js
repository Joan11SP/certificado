const mongoose = require('mongoose');

console.log(process.env.mongo)
mongoose.connect('mongodb+srv://Bruja:1925BscJp@cluster0-hp4pe.mongodb.net/Certificado?retryWrites=true&w=majority')
    .then(db =>console.log('conected to Mongo'))
    .catch(err=>console.error(err));
//var connection = mongo.connect('mongodb://localhost:27017/Certificado');

