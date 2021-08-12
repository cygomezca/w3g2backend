const Plato = require("../models/plato");

const renderPlatoForm = (req, res) => {
    res.render("platos/nuevo-plato");
}

const createNewPlato = async (req, res) => {
    const { name, description, price, id, idtype ,image} = req.body;
    const errors = [];
    if (!name) {
            errors.push({ text: "Por favor escriba un nombre." });
    }
    if (!price) {
        errors.push({ text: "Por favor digite un precio." });
    }
    if (!id) {
        errors.push({ text: "Por favor digite un id." });
    }
    if (!idtype) {
        errors.push({ text: "Por favor digite el tipo de plato." });
    }
    if (errors.length > 0) {
        } else {
            const newPlato = new Plato({name, description, price, id, idtype ,image });
            await newPlato.save();
            req.flash("success_msg", "El plato agregado con exito");
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
    const {name, description, price, id, idtipo, image } = req.body;
    await Plato.findByIdAndUpdate(req.params.id, { name, description, price, id, idtype ,image });
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

