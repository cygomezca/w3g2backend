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

// Get All
router.get("/tipodeplato", tipodeplatoAll);

// New
router.post("/tipodeplato", tipodeplatoPost);

// Edit
router.put("/tipodeplato/:id", tipodeplatoPut);


// Delete
router.delete("/tipodeplato/:id", tipodeplatoDelete);

module.exports = router;