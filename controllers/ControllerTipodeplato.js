const { tipodeplato } = require('../models/');

module.exports = {

    list : async ( req, res, next) =>  {
        try{
            const reg= await tipodeplato.findAll()
            res.status(200).json(reg)

        } catch (error){
            res.status(500).json({'error' : ' pasa algo'})
            next(error)
        }

    },

    add : async ( req, res, next) =>  {
        try{
            const reg= await tipodeplato.created( req.body )
            res.status(200).json(reg)

        }catch (error){
            res.status(500).json({'error' : ' pasa algo'})
            next(error)
        }
    },

    update : async ( req, res, next) =>  {
        try{
            const reg= await tipodeplato.update({nombre: req.body.nombre, descripcion: req.body.descripcion}, {where: {id: req.body._id}})
            res.status(200).json(reg)
            req.flash("success_msg", "Tipo de plato Updated Successfully");
            res.redirect("/tipodeplato");

        }catch (error){
            res.status(500).json({'error' : 'Oops pasa algo'})
            next(error)
        }
    },

    delete : async (req, res, next) => {
        try{
            const reg= await tipodeplato.findByIdAndDelete(req.params.id);
            res.status(200).json(reg)
            req.flash("success_msg", "Tipo de Plato Deleted Successfully");
            res.redirect("/tipodeplato");

        }catch (error){
            res.status(500).json({'error' : ' pasa algo'})
            next(error)
        }
    }
}