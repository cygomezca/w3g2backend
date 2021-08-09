const {Router} = require('express');
var ControllerPlato = require('../controllers/ControllerPlato');
const router = Router();


router.get('./buscar/:id', ControllerPlato.buscarData);
router.get('./buscarall/:idb?', ControllerPlato.listarAllData);
router.post('./crear', ControllerPlato.savePlato);
module.exports = router;