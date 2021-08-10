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

// New Note
router.get("/platos/add",  renderPlatoForm);

router.post("/platos/nuevo-plato",  createNewPlato);

// Get All Notes
router.get("/platos",  renderPlato);

// Edit Notes
router.get("/platos/editar/:id",  renderEditForm);

router.put("/platos/editar-plato/:id",  updatePlato);

// Delete Notes
router.delete("/plato/eliminar/:id",  deletePlato);

module.exports = router;