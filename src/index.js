const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const app = express();
var connection = require('../src/conection-mongo/dbconection');
var routerCertificado= require('../src/Routes/routeData_certifi')
//var routerIdentidades= require('../src/Routes/route_identities');
var routerLogin = require('./Routes/router_login')
var routerCarrer = require('../src/Routes/router_carrer');
var routerRole = require('./Routes/router_role')
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
  
    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  
    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
  });  
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));


//see petitions 
app.use(morgan('dev'));

//routes
app.use('/api',routerCertificado);
//app.use('/api',routerIdentidades);
app.use('/api',routerCarrer);
app.use('/api',routerLogin);
app.use('/api',routerRole);
//port

var port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log('Iniciado', port)
})