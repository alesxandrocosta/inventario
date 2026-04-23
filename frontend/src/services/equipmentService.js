import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const equipmentService = {
  // Obter todos os equipamentos
  getAll: async () => {
    try {
      const response = await api.get('/equipments');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar equipamentos:', error);
      throw error;
    }
  },

  // Obter equipamento por ID
  getById: async (id) => {
    try {
      const response = await api.get(`/equipments/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar equipamento:', error);
      throw error;
    }
  },

  // Criar equipamento
  create: async (data) => {
    try {
      const response = await api.post('/equipments', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar equipamento:', error);
      throw error;
    }
  },

  // Atualizar equipamento
  update: async (id, data) => {
    try {
      const response = await api.put(`/equipments/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar equipamento:', error);
      throw error;
    }
  },

  // Deletar equipamento
  delete: async (id) => {
    try {
      const response = await api.delete(`/equipments/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar equipamento:', error);
      throw error;
    }
  },

  // Exportar para Excel
  exportToExcel: async () => {
    try {
      const response = await api.get('/equipments/report/export', {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Inventario_Assistencia_Tecnica.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentElement.removeChild(link);
    } catch (error) {
      console.error('Erro ao exportar Excel:', error);
      throw error;
    }
  },

  // Obter lista de compras
  getPurchaseList: async () => {
    try {
      const response = await api.get('/equipments/purchase-list/incomplete');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar lista de compras:', error);
      throw error;
    }
  }
};
