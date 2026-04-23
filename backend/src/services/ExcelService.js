const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

class ExcelService {
  static async generateReport(equipments, purchaseList) {
    const wb = new ExcelJS.Workbook();

    // ABA 1: INVENTÁRIO
    const ws1 = wb.addWorksheet('Inventário de Equipamentos');

    const headers = [
      'ID Interno',
      'Tipo',
      'Marca',
      'Modelo',
      'Número de Série',
      'Status de Integridade',
      'Peças Faltantes',
      'Status de Limpeza',
      'Testado?',
      'Data de Registro',
      'Observações Técnicas'
    ];

    ws1.addRow(headers);

    // Estilização do cabeçalho
    const headerFill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF2C3E50' }
    };

    const headerFont = {
      bold: true,
      color: { argb: 'FFFFFFFF' },
      name: 'Calibri',
      size: 12
    };

    const headerAlignment = {
      horizontal: 'center',
      vertical: 'center',
      wrapText: true
    };

    ws1.getRow(1).eachCell((cell) => {
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.alignment = headerAlignment;
    });

    // Adicionar dados
    equipments.forEach((eq) => {
      ws1.addRow([
        eq.id_interno,
        eq.tipo,
        eq.marca,
        eq.modelo,
        eq.numero_serie,
        eq.status_integridade,
        eq.pecas_faltantes || '-',
        eq.status_limpeza,
        eq.testado ? 'Sim' : 'Não',
        eq.data_registro ? new Date(eq.data_registro).toLocaleDateString('pt-BR') : '',
        eq.observacoes || ''
      ]);
    });

    // Ajustar largura das colunas
    ws1.columns.forEach((col, idx) => {
      let maxLength = headers[idx].length;
      equipments.forEach((eq) => {
        const value = Object.values(eq)[idx];
        if (value) {
          maxLength = Math.max(maxLength, String(value).length);
        }
      });
      col.width = Math.min(maxLength + 2, 50);
    });

    // ABA 2: LISTA DE COMPRAS
    const ws2 = wb.addWorksheet('Lista de Compras');

    const purchaseHeaders = ['Equipamento Origem', 'Peça Necessária', 'Prioridade', 'Observações'];
    ws2.addRow(purchaseHeaders);

    ws2.getRow(1).eachCell((cell) => {
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.alignment = headerAlignment;
    });

    purchaseList.forEach((item, idx) => {
      ws2.addRow([
        `${item.marca} ${item.modelo}`,
        item.pecas_faltantes || 'Verificar',
        idx % 2 === 0 ? 'Alta' : 'Média',
        `ID: ${item.id_interno}`
      ]);
    });

    ws2.columns.forEach((col) => {
      col.width = 30;
    });

    // Salvar arquivo
    const uploadsDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, `Inventario_${Date.now()}.xlsx`);
    await wb.xlsx.writeFile(filePath);

    return filePath;
  }
}

module.exports = ExcelService;
