const pool = require('../config/database');

class Equipment {
  // Obter todos os equipamentos
  static async getAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM equipamentos ORDER BY id DESC');
      return rows;
    } catch (error) {
      throw new Error(`Erro ao buscar equipamentos: ${error.message}`);
    }
  }

  // Obter equipamento por ID
  static async getById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM equipamentos WHERE id = ?', [id]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Erro ao buscar equipamento: ${error.message}`);
    }
  }

  // Criar novo equipamento
  static async create(data) {
    try {
      const {
        id_interno,
        tipo,
        marca,
        modelo,
        numero_serie,
        tamanho_polegadas,
        status_integridade,
        pecas_faltantes,
        status_limpeza,
        testado,
        observacoes
      } = data;

      // Validar campos obrigatórios
      if (!id_interno || !tipo || !marca || !modelo) {
        const campos = [];
        if (!id_interno) campos.push('ID Interno');
        if (!tipo) campos.push('Tipo');
        if (!marca) campos.push('Marca');
        if (!modelo) campos.push('Modelo');
        throw new Error(`Campos obrigatórios faltando: ${campos.join(', ')}`);
      }

      const query = `
        INSERT INTO equipamentos 
        (id_interno, tipo, marca, modelo, numero_serie, tamanho_polegadas, status_integridade, 
         pecas_faltantes, status_limpeza, testado, data_registro, observacoes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?)
      `;

      const [result] = await pool.query(query, [
        id_interno,
        tipo,
        marca,
        modelo,
        numero_serie,
        tamanho_polegadas || null,
        status_integridade,
        pecas_faltantes || null,
        status_limpeza,
        testado ? 1 : 0,
        observacoes
      ]);

      return { id: result.insertId, ...data };
    } catch (error) {
      throw new Error(`Erro ao criar equipamento: ${error.message}`);
    }
  }

  // Atualizar equipamento
  static async update(id, data) {
    try {
      const {
        id_interno,
        tipo,
        marca,
        modelo,
        numero_serie,
        tamanho_polegadas,
        status_integridade,
        pecas_faltantes,
        status_limpeza,
        testado,
        observacoes
      } = data;

      const query = `
        UPDATE equipamentos 
        SET id_interno = ?, tipo = ?, marca = ?, modelo = ?, numero_serie = ?, tamanho_polegadas = ?,
            status_integridade = ?, pecas_faltantes = ?, status_limpeza = ?, 
            testado = ?, observacoes = ?
        WHERE id = ?
      `;

      await pool.query(query, [
        id_interno,
        tipo,
        marca,
        modelo,
        numero_serie,
        tamanho_polegadas || null,
        status_integridade,
        pecas_faltantes || null,
        status_limpeza,
        testado ? 1 : 0,
        observacoes,
        id
      ]);

      return await this.getById(id);
    } catch (error) {
      throw new Error(`Erro ao atualizar equipamento: ${error.message}`);
    }
  }

  // Deletar equipamento
  static async delete(id) {
    try {
      await pool.query('DELETE FROM equipamentos WHERE id = ?', [id]);
      return { success: true, message: 'Equipamento deletado com sucesso' };
    } catch (error) {
      throw new Error(`Erro ao deletar equipamento: ${error.message}`);
    }
  }

  // Buscar equipamentos incompletos para lista de compras
  static async getIncompleteForPurchaseList() {
    try {
      const [rows] = await pool.query(`
        SELECT id, id_interno, tipo, marca, modelo, status_integridade, pecas_faltantes
        FROM equipamentos 
        WHERE status_integridade IN ('Incompleto', 'Falta Peça')
        ORDER BY id_interno
      `);
      return rows;
    } catch (error) {
      throw new Error(`Erro ao buscar lista de compras: ${error.message}`);
    }
  }
}

module.exports = Equipment;
