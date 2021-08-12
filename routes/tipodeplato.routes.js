const { Router } = require ("express");
const {
    prueba2,
    tipodeplatoAll,
    tipodeplatoPut,
    tipodeplatoPost,
    tipodeplatoDelete
} = require ("../controllers/ControllerTipodeplato");

const router = Router();

router.get('/prueba2', prueba2);

// New
router.post("/tipodeplato/new-tipo", tipodeplatoPost);

// Get All
router.get("/tipodeplato/all", tipodeplatoAll);

// Edit
router.put("/tipodeplato/:type", tipodeplatoPut);


// Delete
router.delete("/tipodeplato/delete/:id", tipodeplatoDelete);

module.exports = router;