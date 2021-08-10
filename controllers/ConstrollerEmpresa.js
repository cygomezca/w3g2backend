const { empresa } = require('../models/');

module.exports = {

    list : async ( req, res, next) =>  {
        try{
            const reg= await empresa.findAll()
            res.status(200).json(reg)

        } catch (error){
            res.status(500).json({'error' : ' pasa algo'})
            next(error)
        }
    },

    update : async ( req, res, next) =>  {
        try{
            const reg= await empresa.update({direccion: req.body.direccion}, {departamento: req.body.departamento}, {cuidad: req.body.ciudad},{telefono: req.body.telefono},{where: {id: req.body._id}})
            res.status(200).json(reg)

        }catch (error){
            res.status(500).json({'error' : 'Oops pasa algo'})
            next(error)
        }
    }
}