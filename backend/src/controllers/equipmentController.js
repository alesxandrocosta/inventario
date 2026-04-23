const Equipment = require('../models/Equipment');
const ExcelService = require('../services/ExcelService');

// Obter todos os equipamentos
exports.getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.getAll();
    res.json({
      success: true,
      data: equipments,
      count: equipments.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Obter equipamento por ID
exports.getEquipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.getById(id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Equipamento não encontrado'
      });
    }

    res.json({
      success: true,
      data: equipment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Criar novo equipamento
exports.createEquipment = async (req, res) => {
  try {
    console.log('📝 Dados recebidos:', req.body);
    const equipment = await Equipment.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Equipamento criado com sucesso',
      data: equipment
    });
  } catch (error) {
    console.error('❌ Erro ao criar:', error.message);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Atualizar equipamento
exports.updateEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.update(id, req.body);

    res.json({
      success: true,
      message: 'Equipamento atualizado com sucesso',
      data: equipment
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Deletar equipamento
exports.deleteEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    await Equipment.delete(id);

    res.json({
      success: true,
      message: 'Equipamento deletado com sucesso'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Exportar para Excel
exports.exportToExcel = async (req, res) => {
  try {
    const equipments = await Equipment.getAll();
    const purchaseList = await Equipment.getIncompleteForPurchaseList();

    const filePath = await ExcelService.generateReport(equipments, purchaseList);

    res.download(filePath, 'Inventario_Assistencia_Tecnica.xlsx', (error) => {
      if (error) {
        console.error('Erro ao fazer download:', error);
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Obter lista de compras
exports.getPurchaseList = async (req, res) => {
  try {
    const purchaseList = await Equipment.getIncompleteForPurchaseList();

    res.json({
      success: true,
      data: purchaseList,
      count: purchaseList.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
