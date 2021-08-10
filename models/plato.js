const mongoose = require('mongoose');
const { Schema } = mongoose;


var PlatoSchema=Schema({
    nombre: String,
	descripcion: String,
	precio: Number,
	id: String,
    idtipo: String,
    imagen: String
	});

const Plato = mongoose.model('plato',PlatoSchema);
module.exports = Plato;
