const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

// Rotas de equipamentos
router.get('/', equipmentController.getAllEquipments);
router.get('/:id', equipmentController.getEquipmentById);
router.post('/', equipmentController.createEquipment);
router.put('/:id', equipmentController.updateEquipment);
router.delete('/:id', equipmentController.deleteEquipment);

// Rotas especiais
router.get('/report/export', equipmentController.exportToExcel);
router.get('/purchase-list/incomplete', equipmentController.getPurchaseList);

module.exports = router;
