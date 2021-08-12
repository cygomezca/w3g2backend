const Tipodeplato = require('../models/tipodeplato');

const prueba2 = async (req,res)=> {
    res.status(200).send({message: 'probando una acción'});
}

const tipodeplatoAll = async (req, res) => {
    const tipodeplato = await Tipodeplato.find();
    res.json(tipodeplato);
}


const tipodeplatoPut = async (req, res) => {
    const {id, type} = req.body;
    await Tipodeplato.findByIdAndUpdate(req.params.nombre, { id, type});
    res.json({id,type});
}

const tipodeplatoPost = async (req, res) => {
    const { id, type} = req.body;
    const tipodeplato = new Tipodeplato({ id,type });

    await tipodeplato.save();

    res.json({tipodeplato});
}
const tipodeplatoDelete = (req, res) => {
    Tipodeplato.findByIdAndDelete(req.params.id);
        res.json({
        msg: 'delete API - usuariosDelete'
    });
}

module.exports = {
    prueba2,
    tipodeplatoAll,
    tipodeplatoPut,
    tipodeplatoPost,
    tipodeplatoDelete
}