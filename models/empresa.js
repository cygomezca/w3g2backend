const mongoose = require('mongoose');
const { Schema } = mongoose;


const tipodeplatoSchema = new Schema(
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
    },
);

module.exports = mongoose.model('empresa',empresaSchema);