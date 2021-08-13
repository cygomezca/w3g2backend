const { response, request } = require('express');
const Tipodeplato = require('../models/tipodeplato');

const prueba2 = async (req,res)=> {
    res.status(200).send({message: 'probando una acción'});
}

const tipodeplatoAll = async (req=request, res=response) => {
    const tipodeplato = await Tipodeplato.find();
    res.json( tipodeplato );
}

const tipodeplatoPost = async (req, res) => {
    const { id, type} = req.body;
    const tipodeplato = new Tipodeplato({id,type });

    await tipodeplato.save();

    res.json({tipodeplato});
}

const tipodeplatoPut = async (req, res=response) => {
    const { id, type } = req.body;
    const tipodeplato = await Tipodeplato.findByIdAndUpdate(req.params.id, {id,type});
    res.json(tipodeplato);
}

const tipodeplatoDelete = async (req, res=response) => {
    const tipodeplato = await Tipodeplato.findByIdAndDelete(req.params.id);
    res.json(tipodeplato);
}

module.exports = {
    prueba2,
    tipodeplatoAll,
    tipodeplatoPut,
    tipodeplatoPost,
    tipodeplatoDelete
}