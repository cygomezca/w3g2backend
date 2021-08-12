
const Empresa = require('../models/empresa');

const prueba = async (req,res)=> {
    res.status(200).send({message: 'probando una acción'});
}


const empresaAll = async (req, res) => {
    const empresas = await Empresa.find();
    res.json(empresas);
}

const empresaPut = async (req, res) => {
    const {nombre, direccion, departamento, cuidad, telefono} = req.body;
    await Empresa.findByIdAndUpdate(req.params.nombre, { nombre, direccion, departamento, cuidad, telefono});
    res.send(Empresa);
}

module.exports = {
    prueba,
    empresaAll,
    empresaPut
}