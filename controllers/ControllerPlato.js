const Plato = require("../models/plato");

const renderPlatoForm = (req, res) => {
    res.render("platos/nuevo-plato");
}

const createNewPlato = async (req, res) => {
    const {
        nombre,
        descripcion,
        precio,
        id,
        idtipo,
        imagen} = req.body;
    const errors = [];
    if (!nombre) {
            errors.push({ text: "Por favor escriba un nombre." });
    }
    if (!precio) {
        errors.push({ text: "Por favor digite un precio." });
    }
    if (!id) {
        errors.push({ text: "Por favor digite un id." });
    }
    if (!idtipo) {
        errors.push({ text: "Por favor digite el tipo de plato." });
    }
    if (errors.length > 0) {
        res.render("platos/nuevo-plato", {
            errors,
            nombre,
            descripcion,
            precio,
            id,
            idtipo,
            imagen
            });
        } else {
            const newPlato = new Plato({
                nombre,
                descripcion,
                precio,
                id,
                idtipo,
                imagen });
            newPlato.user = req.user.id;
            await newPlato.save();
            req.flash("success_msg", "El plato agregado con exito");
            res.redirect("/platos");
        }
}

const renderPlato = async (req, res) => {
    const platos = await Plato.find({ user: req.user.id })
        .sort({ date: "desc" })
        .lean();
    res.render("platos/todos-los-platos", { platos });
}

const renderEditForm = async (req, res) => {
    const plato = await plato.findById(req.params.id).lean();
    if (plato.user != req.user.id) {
        req.flash("error_msg", "Not Authorized");
        return res.redirect("/platos");
    }
    res.render("platos/editar-plato", { plato });
}

const updatePlato = async (req, res) => {
    const {nombre, descripcion, precio, id, idtipo, imagen } = req.body;
    await Plato.findByIdAndUpdate(req.params.id, { nombre, descripcion, precio, id, idtipo ,imagen });
    req.flash("success_msg", "Plato actualizado correctamente");
    res.redirect("/platos");
}

const deletePlato = async (req, res) => {
    await Plato.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Plato eliminado correctamente");
    res.redirect("/platos");
}

module.exports = {
    renderPlatoForm,
    createNewPlato,
    renderPlato,
    renderEditForm,
    updatePlato,
    deletePlato,
}

