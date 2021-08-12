const { Router } = require ("express");
const {
    renderPlatoForm,
    createNewPlato,
    renderPlato,
    renderEditForm,
    updatePlato,
    deletePlato,
} = require ("../controllers/ControllerPlato");

const router = Router();

// New
router.get("/plato/add",  renderPlatoForm);

router.post("/plato/nuevo-plato",  createNewPlato);

// Get All
router.get("/plato",  renderPlato);

// Edit
router.get("/plato/editar/:id",  renderEditForm);

router.put("/plato/editar-plato/:id",  updatePlato);

// Delete
router.delete("/plato/eliminar/:id",  deletePlato);

module.exports = router;