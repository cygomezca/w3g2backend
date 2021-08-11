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
router.get("/platos/add",  renderPlatoForm);

router.post("/platos/nuevo-plato",  createNewPlato);

// Get All
router.get("/platos",  renderPlato);

// Edit
router.get("/platos/editar/:id",  renderEditForm);

router.put("/platos/editar-plato/:id",  updatePlato);

// Delete
router.delete("/plato/eliminar/:id",  deletePlato);

module.exports = router;