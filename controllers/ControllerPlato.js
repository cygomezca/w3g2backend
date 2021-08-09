function prueba(req,res){
    res.status(200).send({
    message: 'probando una acción'
    });
}

function savePlato(req,res){
    var myPlato=new Plato(req.body);
    myPlato.savePlato((err,result)=>{
        res.status(200).send({message:result});
    });
}

function buscarData(req,res){
    var idPlato=req.params.id;
    Plato.findById(idPlato).exec((err,result)=>{
        if(err){
            if(!result){
                res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
            }else{
                if(!result){
                    res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
                }else{
                    res.status(200).send({result});
                }
            }
        }
    });
}

function listarAllData(req,res){
    var idPlato=req.params.idb;
    if(!idPlato){
        var result=Plato.find({}).sort('nombre');
    }else{
        var result=Plato.find({_id:idPlato}).sort('nombre');
    }

    result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
    })
}

function updatePlato(req,res){
    var id = mongoose.Types.ObjectId(req.query.productId);
    Plato.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, Plato) {
        if (err)
            res.send(err);
            res.json(Plato);
        });
}

function deletePlato(req,res){
    var idPlato=req.params.id;
    Plato.findByIdAndRemove(id, function(err, plato){
        if(err) {
            return res.json(500, {
            message: 'No hemos encontrado el plato'
        })
        }
        return res.json(plato)
    });
}


module.exports = {
    prueba,
    savePlato,
    buscarData,
    listarAllData,
    updatePlato,
    deletePlato
}