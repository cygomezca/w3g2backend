const mongoose = require('mongoose');
const { Schema } = mongoose;


const tipodeplatoSchema = new Schema(
    {
    id: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    },
);

module.exports = mongoose.model('tipodeplato',tipodeplatoSchema);