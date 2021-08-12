const { Schema, model } = require('mongoose');


const EmpresaSchema = new Schema(
    {
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    departamento: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    }
    }
);

module.exports = model('Empresa', EmpresaSchema);