import React, { useState, useEffect } from 'react';
import { equipmentService } from '../services/equipmentService';
import '../styles/forms.css';

export default function EquipmentForm({ equipmentId, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    id_interno: '',
    tipo: '',
    marca: '',
    modelo: '',
    numero_serie: '',
    status_integridade: 'Completo',
    pecas_faltantes: '',
    status_limpeza: 'Pendente',
    testado: false,
    observacoes: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (equipmentId) {
      loadEquipment();
    }
  }, [equipmentId]);

  const loadEquipment = async () => {
    try {
      setLoading(true);
      const result = await equipmentService.getById(equipmentId);
      setFormData(result.data);
    } catch (err) {
      setError('Erro ao carregar equipamento');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      
      if (equipmentId) {
        await equipmentService.update(equipmentId, formData);
      } else {
        await equipmentService.create(formData);
      }

      onSuccess?.();
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao salvar equipamento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="equipment-form">
      {error && <div className="error" style={{ gridColumn: '1 / -1', padding: '12px', borderRadius: '4px' }}>{error}</div>}

      <div className="form-group">
        <label>ID Interno</label>
        <input
          type="text"
          name="id_interno"
          value={formData.id_interno}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Tipo</label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um tipo</option>
          <option>Monitor</option>
          <option>Notebook</option>
          <option>Desktop</option>
          <option>Processador</option>
          <option>Memória</option>
          <option>Placa-mãe</option>
          <option>Fonte</option>
          <option>Outros</option>
        </select>
      </div>

      <div className="form-group">
        <label>Marca</label>
        <input
          type="text"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Modelo</label>
        <input
          type="text"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Número de Série</label>
        <input
          type="text"
          name="numero_serie"
          value={formData.numero_serie}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Status de Integridade</label>
        <select
          name="status_integridade"
          value={formData.status_integridade}
          onChange={handleChange}
        >
          <option>Completo</option>
          <option>Incompleto</option>
          <option>Falta Peça</option>
          <option>Sucata</option>
        </select>
      </div>

      <div className="form-group">
        <label>Peças Faltantes</label>
        <input
          type="text"
          name="pecas_faltantes"
          value={formData.pecas_faltantes}
          onChange={handleChange}
          placeholder="Ex: Memória RAM 8GB"
        />
      </div>

      <div className="form-group">
        <label>Status de Limpeza</label>
        <select
          name="status_limpeza"
          value={formData.status_limpeza}
          onChange={handleChange}
        >
          <option>Pendente</option>
          <option>Em Progresso</option>
          <option>Concluido</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="testado"
            checked={formData.testado}
            onChange={handleChange}
          />
          {' '}Testado?
        </label>
      </div>

      <div className="form-group">
        <label>Observações Técnicas</label>
        <textarea
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
          placeholder="Observações adicionais"
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn btn-secondary" disabled={loading}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar Equipamento'}
        </button>
      </div>
    </form>
  );
}
