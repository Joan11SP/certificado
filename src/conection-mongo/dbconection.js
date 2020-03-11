const mongo = require('mongoose');
      
var connection = mongo.connect('mongodb+srv://Bruja:1925BscJp@cluster0-hp4pe.mongodb.net/Certificado?retryWrites=true&w=majority');


mongo.connection.on('open',ref=>{
    console.log('conect to mongo')
})

module.exports=connection;
