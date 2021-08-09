var app = require('./app');
var mongoose = require('./database')
var port = 4000;

app.listen(port,()=>{
    console.log("Servidor corriendo ok")
});