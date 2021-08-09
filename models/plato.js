var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlatoSchema=Schema({
    nombre: String,
	descripcion: String,
	precio: String,
	id: String,
    idtipo: String,
    img: String
	});

const Plato = mongoose.model('plato',PlatoSchema);
module.exports = Plato;

