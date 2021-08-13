const { Router } = require ("express");
const {
    prueba,
    empresaAll,
    empresaPut
} = require ("../controllers/ConstrollerEmpresa");

const router = Router();

router.get('/prueba', prueba);
// Get All
router.get("/info", empresaAll);

// Actualizar Empresa
router.put('/:id', empresaPut );




module.exports = router;