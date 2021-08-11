const { Schema, model } = require('mongoose');

const PlatoSchema=Schema({
    name: {
        type: String,
        required: [true, 'Schema: El nombre es obligatorio']
    },
	description: {
        type: String,
        required: [true, 'Schema: La descripcion es obligatoria']
    },
	pryce: {
        type: String,
        required: [true, 'Schema: El precio es obligatorio']
    },
	id: {
        type: String,
        required: [true, 'Schema: El id es obligatorio']
    },
    idtype: {
        type: String,
        required: [true, 'Schema: El idtipo es obligatorio']
    },
    image: {
        type: String,
        required: [true, 'Schema: La imagen es obligatoria']
    },
	state: {
        type: Boolean,
        default: true
    }
	});

module.exports = model('Plato', PlatoSchema);