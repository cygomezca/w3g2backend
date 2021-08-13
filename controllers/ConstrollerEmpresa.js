const { response, request } = require('express');
const Empresa = require('../models/empresa');

const prueba = async (req = request, res = response)=> {
    res.status(200).send({message: 'probando una acción'});
}


const empresaAll = async (req, res = response) => {
    const empresa = await Empresa.find();
    res.json(empresa);
}

const empresaPut = async (req, res) => {
    const {nombre, direccion, departamento, cuidad, telefono} = req.body;
    const empresa = await Empresa.findByIdAndUpdate(req.params.id, { nombre, direccion, departamento, cuidad, telefono});
    res.send(empresa);
}

module.exports = {
    prueba,
    empresaAll,
    empresaPut
}