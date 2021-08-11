const { Schema, model } = require('mongoose');

const TipodeplatoSchema = new Schema(
    {
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    },
);

module.exports = model('Tipodeplato',TipodeplatoSchema);