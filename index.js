'use strict'

var mongooes = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongooes.connect('mongodb+srv://guido:guido@curso-angular.kam11sz.mongodb.net/?retryWrites=true&w=majority', (err, res) => {
    if(err){
        throw err;
    } else {
        console.log('La conexión a la base de datos está funcionando correctamente...');
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:'+port);
        });
    }
});


